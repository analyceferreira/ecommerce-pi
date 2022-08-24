const page = window.location.pathname
const buttonsSidebar = document.querySelectorAll('.user-page-option')

const pageOrders = '/pedidos'
const pageData = '/conta'

if (page == pageOrders) {
    for(const button of buttonsSidebar) {
        button.classList.remove('option-select');

        if (button.classList.contains('orders')) {
            button.classList.add('option-select')
        }
    }
}

if (page == pageData) {
    for(const button of buttonsSidebar) {
        button.classList.remove('option-select');

        if (button.classList.contains('infos')) {
            button.classList.add('option-select')
        }
    }
}