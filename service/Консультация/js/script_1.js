BX.ready(function () {
    BX.MsgInHeader = {}
    BX.MsgInHeader.App = {
        init: function () {
            this.checkCookies()
        },
        modifyDOM: function () {
            const allElements = Array.from(document.querySelectorAll('*'));

            const fixedElements = allElements.filter(el => {
                const style = window.getComputedStyle(el);
                return style.position === 'fixed' && parseInt(style.top, 10) < this.container.offsetHeight;
            });

            const absoluteElements = Array.from(document.body.children).filter(el => {
                const style = window.getComputedStyle(el);
                return style.position === 'absolute' && parseInt(style.top, 10) < this.container.offsetHeight;
            });

            document.documentElement.style.setProperty('--bquadroMsginheader', `${this.container.offsetHeight}px`);

            [...fixedElements, ...absoluteElements].filter(el => el.id !== 'bquadro_msginheader').forEach(el => {
                el.setAttribute('data-bquadro-msginheader-offset', '');
            });

            const maxZIndex = allElements.reduce((max, el) => {
                const style = window.getComputedStyle(el);
                const zIndex = parseInt(style.zIndex, 10) || 0;
                return Math.max(max, zIndex);
            }, 0);

            this.container.style.zIndex = maxZIndex + 1;
        },
        listiner: function () {
            let closeButton = document.getElementById('close_msginheader');
            closeButton.addEventListener('click', (e) => {
                $(this.container).slideUp(500, function () {

                    let cookieName = 'msginheader_policy';
                    let flag = true;
                    this.setCookie(cookieName, flag);

                    document.documentElement.style.setProperty('--bquadroMsginheader', `${this.container.offsetHeight}px`);
                    document.querySelectorAll('[data-bquadro-msginheader-offset]').forEach(element => {
                        element.removeAttribute('data-bquadro-msginheader-offset');
                    });
                }.bind(this));
            });

        },
        resizeListener: function () {
            window.addEventListener('resize', () => {
                document.documentElement.style.setProperty('--bquadroMsginheader', `${this.container.offsetHeight}px`);
            });
        },

        setCookie: function (name, value) {
            sessionStorage.setItem(name, value)
        },

        checkCookies: function () {
            // Если куки cookies_policy нет или она просрочена, то показываем уведомление
            let getCookies = sessionStorage.getItem('msginheader_policy');

            if (getCookies === null) {
                this.container = document.getElementById('bquadro_msginheader')
                if (this.container) {
                    this.modifyDOM()
                    this.listiner()
                    this.resizeListener()
                }
            }
        },
    }
    BX.MsgInHeader.App.init();
});
