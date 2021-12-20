$(document).ready(function() {
    const todoInput = document.querySelector('.todo__input');
    const todoSubmit = document.querySelector('.todo__submit');
    const todoArea = document.querySelector('.todo__area');
    const todoFilter = document.querySelector('.todo__filter');

    todoSubmit.addEventListener('click', list);
    todoInput.addEventListener('keyup', listByEnter);
    todoFilter.addEventListener('change', filter);

    function listByEnter(event) {
        if(event.keyCode === 13) list();
    }

    function list(event) {
        if(todoInput.value === "") return;
        const div = document.createElement('div');
        div.className = "todo__list all working animate__animated animate__rotateInDownRight";
        div.innerHTML = `
            <p class="todo__text">${todoInput.value}</p>
            <button class="todo__button done">
                <i class="fas fa-thumbs-up"></i>
            </button>
            <button class="todo__button delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        todoArea.append(div);
        todoInput.value = "";
    }

    function filter(event) {
        const keyword = event.target.value;
        const allList = document.querySelectorAll('.all');
        /* 
            Make all list to display none first.
        */
        allList.forEach(list => list.style.display = "none");

        allList.forEach(todo => {
            if(todo.classList.contains(keyword)) {
                /*
                    Display none whatever is selected first for the animation effect.
                */
                todo.style.display = "none"
                todo.classList.replace('animate__rotateInDownRight', 'animate__rubberBand');
                /*
                    After 50 miliseconds make the selected list display flex with animation.
                */
                setTimeout(() => todo.style.display = "flex", 50);
            }
        })

    }

    /* 
        delete button
    */
    $(document).on('click', 'button.delete', function() {
        this.parentElement.classList.add("move");
        /*
            This event listener will run after the first animation of the same element ends.
        */
        this.parentElement.addEventListener('animationend', function() {
            setTimeout(() => this.remove(), 1000);   
        })
    });

    /*
        complete button
    */
    $(document).on('click', 'button.done', function(e) {
        if(e.target.isChecked == null) e.target.isChecked = false;
        if(e.target.isChecked == false) {
            $(this).prev().css({
                                'text-decoration': 'line-through',
                                'color': 'rgba(20, 20, 20, 0.5)'});
            $(this).parent().css('background', 'rgba(245, 245, 245, 0.6)');
            $(this).parent().removeClass('working').addClass('complete');
            e.target.isChecked = true;
        } else {
            $(this).prev().css({
                                'text-decoration': 'none',
                                'color': 'rgba(20, 20, 20, 1)'});
            $(this).parent().css('background', 'rgba(245, 245, 245, 1)');
            $(this).parent().removeClass('complete').addClass('working');
            e.target.isChecked = false;
        }
    });
});