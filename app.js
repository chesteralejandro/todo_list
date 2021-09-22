$(document).ready(function() {
    const input = document.querySelector('.todo__input');
    const submitButton = document.querySelector('.todo__button.submit');
    const area = document.querySelector('.todo__area');

    submitButton.addEventListener('click', list);
    input.addEventListener('keyup', listByEnter);

    function listByEnter(event) {
        if(event.keyCode === 13) list();
    }

    function list() {
        if(input.value === "") return;
        const div = document.createElement('div');
        div.className = "todo__list";
        div.innerHTML = `
            <p class="todo__text">${input.value}</p>
            <button class="todo__button done">
                <i class="fas fa-check"></i>
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
            this.remove();
        })
    });

    // complete button
    $(document).on('click', 'button.done', function() {
        $(this).prev().css('text-decoration', 'line-through');
        $(this).parent().css('opacity', 0.4);
    });
});