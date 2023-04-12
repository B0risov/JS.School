const Header = ({title}) => {

    const header_wrapper = document.createElement('div')
    header_wrapper.classList.add('header')

    const header_title = document.createElement('h1')
    header_title.classList.add('header__title')
    header_title.innerText = title

    header_wrapper.append(header_title)

    return header_wrapper
}

export default Header