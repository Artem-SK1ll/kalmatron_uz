class BquadroFormPopup {
    constructor() {
        this.init();
    }

    init() {
        document.documentElement.addEventListener('click', this.handleDocumentClick.bind(this));
    }

    handleDocumentClick(event) {
        const openButton = event.target.closest('.js-bq-form-popup-open');
        const closeButton = event.target.closest('.js-bq-form-popup-close');
        const outsideClick = event.target.closest('.js-bq-form-popup') && !event.target.closest('.js-bq-form-popup-body');

        if (openButton) {
            event.preventDefault();
            this.startLoader(openButton);
            const formData = this.collectFormData(openButton);
            this.performAction(formData, this.showPopup.bind(this), openButton);
            return false;
        }

        if (closeButton || outsideClick) {
            this.hidePopup();
        }
    }

    collectFormData(openButton) {
        const formData = new FormData();
        [...openButton.attributes].forEach(attr => {
            if (attr.name.startsWith('data-')) {
                formData.append(attr.name.slice(5), attr.value);
            }
        });
        return formData;
    }

    performAction(formData, callback, openButton) {
        BX.ajax.runAction('bquadro:fos.foscontroller.popup', {
            data: formData
        }).then(response => {
            callback(response);
            this.stopLoader(openButton);
        }).catch(() => {
            this.stopLoader(openButton);
        });
    }

    startLoader(openButton) {
        document.documentElement.classList.add('is-bq-form-popup-loading');
        openButton.classList.add('is-bq-form-popup-loading');
    }

    stopLoader(openButton) {
        document.documentElement.classList.remove('is-bq-form-popup-loading');
        openButton.classList.remove('is-bq-form-popup-loading');
    }

    showPopup(response) {
        const popup = this.createPopupElement(response.data.html);
        document.body.appendChild(popup);
        document.documentElement.classList.add('is-bq-form-popup-opened');
        this.executeScript(popup);
        setTimeout(() => {
            popup.classList.add('is-active');
        }, 100);
    }

    createPopupElement(htmlContent) {
        const popup = document.createElement('div');
        popup.className = 'bq-form-popup js-bq-form-popup';

        const dialog = document.createElement('div');
        dialog.className = 'bq-form-popup__dialog';

        const content = document.createElement('div');
        content.className = 'bq-form-popup__content';

        const body = document.createElement('div');
        body.className = 'bq-form-popup__body js-bq-form-popup-body';
        body.innerHTML = htmlContent;

        const closeButton = document.createElement('div');
        closeButton.className = 'bq-form-popup__close js-bq-form-popup-close';

        body.appendChild(closeButton);
        content.appendChild(body);
        dialog.appendChild(content);
        popup.appendChild(dialog);

        return popup;
    }

    executeScript(popup) {
        const scriptElement = popup.querySelector('.js-bq-form-script');
        if (scriptElement) {
            const scriptContent = scriptElement.innerHTML;
            if (scriptContent) {
                const newScript = document.createElement('script');
                newScript.text = scriptContent;
                document.body.appendChild(newScript);
            }
        }
    }

    hidePopup() {
        const activePopup = document.querySelector('.js-bq-form-popup.is-active');
        if (activePopup) {
            activePopup.classList.remove('is-active');
            activePopup.addEventListener('transitionend', () => activePopup.remove(), {once: true});
            document.documentElement.classList.remove('is-bq-form-popup-opened');
        }
    }
}

class BquadroFormPhone {
    constructor(phoneElement) {
        this.phoneElement = phoneElement;
        this.init();
    }

    init() {
        if (window.IMask) {
            window.IMask(this.phoneElement, {
                mask: [
                    {mask: '+{7} (000) 000-00-00', startsWith: '8', prepare: this.prepareMask},
                    {mask: '+7 (000) 000-00-00', startsWith: '+7'},
                    {mask: '+7 (000) 000-00-00', startsWith: '7'},
                    {mask: '+7 (000) 000-00-00', startsWith: ''}
                ],
                prepare: (appended, masked) => this.prepareMask(appended, masked)
            });
        }
    }

    prepareMask(appended, masked) {
        return appended === '8' && masked.value === '' ? '+7' : appended;
    }
}

class BquadroFormFile {
    constructor(fileWrapper) {
        this.fileWrapper = fileWrapper;
        this.fileInput = fileWrapper.querySelector('.js-bq-form-file-input');
        this.fileList = new DataTransfer();
        this.fileListWrapper = null;
        this.init();
    }

    init() {
        if (this.fileInput) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.fileInput.addEventListener('change', this.handleFileChange.bind(this));
    }

    handleFileChange() {
        const files = Array.from(this.fileInput.files);

        if (files.length > 0) {
            if (!this.fileListWrapper) {
                this.fileListWrapper = document.createElement('div');
                this.fileListWrapper.className = 'bq-form-file__list-wrapper js-bq-form-file-list-wrapper';
                const listContainer = document.createElement('div');
                listContainer.className = 'bq-form-file__list';
                this.fileListWrapper.appendChild(listContainer);
                this.fileWrapper.appendChild(this.fileListWrapper);
            }

            const listContainer = this.fileListWrapper.querySelector('.bq-form-file__list');

            files.forEach(file => {
                const itemElement = document.createElement('div');
                itemElement.className = 'bq-form-file__item js-bq-form-file-item';

                const fileNameElement = document.createElement('div');
                fileNameElement.className = 'bq-form-file__name js-bq-form-file-name';
                fileNameElement.textContent = file.name;

                const deleteButton = document.createElement('div');
                deleteButton.className = 'bq-form-file__delete js-bq-form-file-delete';
                deleteButton.tabIndex = 0;

                itemElement.appendChild(fileNameElement);
                itemElement.appendChild(deleteButton);
                listContainer.appendChild(itemElement);
                this.fileList.items.add(file);

                deleteButton.addEventListener('click', this.removeFile.bind(this));
            });

            this.fileInput.files = this.fileList.files;
        }
    }

    removeFile(event) {
        const item = event.target.closest('.js-bq-form-file-item');
        if (item) {
            const fileName = item.querySelector('.js-bq-form-file-name').textContent;

            for (let i = 0; i < this.fileList.items.length; i++) {
                if (this.fileList.items[i].getAsFile().name === fileName) {
                    this.fileList.items.remove(i);
                    break;
                }
            }

            this.fileInput.files = this.fileList.files;
            item.remove();

            if (this.fileList.files.length === 0 && this.fileListWrapper) {
                this.fileListWrapper.remove();
                this.fileListWrapper = null;
            }
        }
    }
}

class BquadroForm {
    constructor(data) {
        this.params = data.params || {};
        this.result = data.result || {};
        this.recaptchaEnabled = this.result['GOOGLE_RECAPTCHA_V3_ENABLED'] === 'Y';
        this.recaptchaUrl = this.result['GOOGLE_RECAPTCHA_URL'];
        this.recaptchaSiteKey = this.result['GOOGLE_RECAPTCHA_V3_SITE_KEY'];
        this.formElement = document.getElementById(this.result['FORM_ID']);
        this.init();
    }

    init() {
        if (this.formElement) {
            this.loadRecaptcha();
            this.bindEvents();

            const phoneElements = this.formElement.querySelectorAll('.js-bq-form-phone');
            const fileElements = this.formElement.querySelectorAll('.js-bq-form-file');

            if (phoneElements.length > 0) {
                phoneElements.forEach(phoneElement => new BquadroFormPhone(phoneElement));
            }

            if (fileElements.length > 0) {
                fileElements.forEach(fileElement => new BquadroFormFile(fileElement));
            }
        }
    }

    loadRecaptcha() {
        if (this.recaptchaEnabled && typeof grecaptcha === 'undefined') {
            const script = document.createElement('script');
            script.src = this.recaptchaUrl;
            (document.head || document.documentElement).appendChild(script);
        }
    }

    bindEvents() {
        this.formElement.addEventListener('submit', this.handleFormSubmit.bind(this));
        this.formElement.addEventListener('input', this.clearError.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (!this.formElement.checkValidity()) {
            this.formElement.reportValidity();
        }

        this.showLoader();
        this.recaptchaEnabled ? this.runRecaptcha() : this.submitForm();
    }

    clearError(event) {
        const errorContainer = event.target.closest('[data-name].is-error');
        if (errorContainer) {
            errorContainer.classList.remove('is-error');
            const errorMessage = errorContainer.querySelector('.js-bq-form-error');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    }

    runRecaptcha() {
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.ready(() => {
                grecaptcha.execute(this.recaptchaSiteKey, {
                    action: this.result['GOOGLE_RECAPTCHA_ACTION']
                }).then(token => this.submitForm(token));
            });
        }
    }

    submitForm(token = '') {
        const formData = new FormData(this.formElement);
        formData.append('SEND_PAGE', window.location.href);
        formData.append('TYPE', this.params['TYPE']);
        formData.append('IBLOCK_ID', this.result['IBLOCK_ID']);
        formData.append('GOAL', this.params['GOAL']);
        formData.append('SUCCESS_MESSAGE', this.params['SUCCESS_MESSAGE']);
        formData.append('recaptcha_action', this.result['GOOGLE_RECAPTCHA_ACTION']);
        formData.append('recaptcha_response', token);

        this.sendRequest('submit', formData, this.displaySuccess.bind(this));
    }

    sendRequest(action, formData, callback) {
        this.clearAllErrors();
        BX.ajax.runAction(`bquadro:fos.foscontroller.${action}`, {
            data: formData
        }).then(response => {
            callback(response);
            this.hideLoader();
        }).catch(response => {
            this.displayErrors(action, response);
            this.hideLoader();
        });
    }

    showLoader() {
        document.documentElement.classList.add('is-bq-form-submitting');
        this.formElement.classList.add('is-submitting');
    }

    hideLoader() {
        document.documentElement.classList.remove('is-bq-form-submitting');
        this.formElement.classList.remove('is-submitting');
        this.formElement.scrollIntoView({behavior: "smooth"});
    }

    clearAllErrors() {
        Array.from(this.formElement.querySelectorAll('.is-error')).forEach(errorContainer => {
            errorContainer.classList.remove('is-error');
            const errorMessage = errorContainer.querySelector('.js-bq-form-error');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    }

    displayErrors(action, response) {
        if (response.errors.length === 0) return;

        const errorMessages = response.errors.map(error => {
            if (action === 'submit' && error.code === 500 && 'code' in error.customData) {
                const errorField = this.formElement.querySelector(`[data-name="${error.customData.code}"]`);
                if (errorField) {
                    errorField.classList.add('is-error');
                    if (error.message) {
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'bq-form-control__error js-bq-form-error';
                        errorMessage.textContent = error.message;
                        errorField.prepend(errorMessage);
                    }
                }
            } else {
                return error.message;
            }
        }).filter(Boolean).join('\n');

        if (errorMessages) {
            alert(errorMessages);
        }
    }

    displaySuccess(response) {
        this.formElement.reset();

        const fileListWrappers = Array.from(this.formElement.querySelectorAll('.js-bq-form-file-list-wrapper'));

        if (fileListWrappers.length > 0) {
            fileListWrappers.forEach(fileListWrapper => fileListWrapper.remove());
        }

        const successWrapper = document.createElement('div');
        successWrapper.className = 'bq-form-success';
        successWrapper.innerHTML = `<div class="bq-form-success__text">${response.data.success_message || 'Спасибо. Ваша заявка принята.'}</div>`;

        if (this.formElement.closest('.js-bq-form-popup')) {
            const innerContainer = this.formElement.querySelector('.js-bq-form-inner');

            if (innerContainer) {
                innerContainer.innerHTML = '';
                innerContainer.appendChild(successWrapper);
            } else {
                this.formElement.innerHTML = '';
                this.formElement.appendChild(successWrapper);
            }
        } else {
            this.showPopup(successWrapper);
        }
        if (response.data.goal) {
            this.sendTrackingEvent(response.data.goal);
        }
    }

    showPopup(htmlContent) {
        const popup = this.createPopupElement(htmlContent);
        document.body.appendChild(popup);
        document.documentElement.classList.add('is-bq-form-popup-opened');
        setTimeout(() => {
            popup.classList.add('is-active');
        }, 100);
    }

    createPopupElement(htmlContent) {
        const popup = document.createElement('div');
        popup.className = 'bq-form-popup bq-form-popup--success js-bq-form-popup';

        const dialog = document.createElement('div');
        dialog.className = 'bq-form-popup__dialog';

        const content = document.createElement('div');
        content.className = 'bq-form-popup__content';

        const body = document.createElement('div');
        body.className = 'bq-form-popup__body js-bq-form-popup-body';
        body.appendChild(htmlContent);

        const closeButton = document.createElement('div');
        closeButton.className = 'bq-form-popup__close js-bq-form-popup-close';

        body.appendChild(closeButton);
        content.appendChild(body);
        dialog.appendChild(content);
        popup.appendChild(dialog);

        return popup;
    }

    sendTrackingEvent(value) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({'event': value});
    }
}

class BquadroFormPopupEx extends BquadroFormPopup {
    performAction(formData, callback, openButton) {
        BX.ajax.runAction('bquadro:fos.foscontroller.popup', {
            data: formData
        }).then(response => {
            callback(response, formData);
            this.stopLoader(openButton);
        }).catch(() => {
            this.stopLoader(openButton);
        });
    }
    showPopup(response, formData) {

        const ProductDataGet = formData.get("productdata");
        if (ProductDataGet) {
            const objProductData = JSON.parse(ProductDataGet);
            const html = `<a title="${objProductData["name"]}" href="${objProductData["url"]}" class="category__product-image-block">
                <img src="${objProductData["picture"]}" alt="${objProductData["name"]}" class="category__product-image">
            </a>
            <div class="category__product-info-block">
                <div class="category__product-left">
                    <p class="category__product-category color-text-gray">${objProductData["section"]}</p>
                    <a href="#" class="category__product-title">${objProductData["name"]}</a>
                    <p class="category__product-description">${objProductData["chars"]}</p>
                </div>
            </div>`;
            const parser = new DOMParser();
            const responseDataHtml = parser.parseFromString(response.data.html, "text/html");
            responseDataHtml.documentElement.querySelector("[data-product-info]").innerHTML = html;
            responseDataHtml.documentElement.querySelector("[data-product-info]").style.display = "flex";
            responseDataHtml.documentElement.querySelector("[data-modal=price] [name=PRODUCT]").value = objProductData["id"];
            response.data.html = responseDataHtml.documentElement.innerHTML.toString();
        }

        const popup = this.createPopupElement(response.data.html);
        document.body.appendChild(popup);
        document.documentElement.classList.add('is-bq-form-popup-opened');
        this.executeScript(popup);
        setTimeout(() => {
            popup.classList.add('is-active');
        }, 100);
    }
}

//new BquadroFormPopup();
new BquadroFormPopupEx();
