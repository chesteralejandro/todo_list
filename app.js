$(document).ready(function() {
    const input = document.querySelector('.todo__input');
    const submitButton = document.querySelector('.todo__submit');
    const area = document.querySelector('.todo__area');

    submitButton.addEventListener('click', list);
    input.addEventListener('keyup', listByEnter);

    function listByEnter(event) {
        if(event.keyCode === 13) list();
    }

    function list() {
        if(input.value === "") return;
        const div = document.createElement('div');
        div.className = "todo__list animate__animated animate__rubberBand";
        div.innerHTML = `
            <p class="todo__text">${input.value}</p>
            <button class="todo__button done">
                <i class="fas fa-thumbs-up"></i>
            </button>
            <button class="todo__button delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        area.append(div);
        input.value = "";
    }

    // delete button
    $(document).on('click', 'button.delete', function() {
        this.parentElement.classList.add("move");
        this.parentElement.addEventListener('animationend', function() {
            setTimeout(() => this.remove(), 1000);   
        })
    });

    // complete button
    $(document).on('click', 'button.done', function(e) {
        if( e.target.isChecked == null) e.target.isChecked = false;
        if(e.target.isChecked == false) {
            $(this).prev().css({
                                'text-decoration': 'line-through',
                                'color' : 'rgba(20, 20, 20, 0.5)',
                                'backdrop-filter' : 'blur(100px)'});
            $(this).parent().css('background', 'rgba(245, 245, 245, 0.6)');
            e.target.isChecked = true;
        } else {
            $(this).prev().css({
                                'text-decoration': 'none',
                                'color' : 'rgba(20, 20, 20, 1)',
                                'backdrop-filter' : 'blur(0px)'});
            $(this).parent().css('background', 'rgba(245, 245, 245, 1)');
            e.target.isChecked = false;
        }
    });
});