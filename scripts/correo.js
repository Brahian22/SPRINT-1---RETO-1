let $form = document.querySelector('.form')
let $button = document.querySelector('.linkcorreo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit (e) {
    e.preventDefault();

    const form = new FormData(this)
    console.log (form.get('correo'))
    $button.setAttribute('href', `mailto: brahianalzate02@gmail.com?subject=${form.get('correo')}`)
    $button.click()
}