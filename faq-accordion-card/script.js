const btn_questions = document.querySelectorAll('.question-container');
let flag = 0,
    oj_current = {};

function close() {
    btn_questions.forEach(function(element) {
        if (element.nextElementSibling.style.display = 'block') {
            element.nextElementSibling.style.display = 'none';
            flag = 0;
            element.querySelector('img').className = 'arrow-down';
            element.querySelector('p.question').style.fontWeight = '400';
            document.querySelector('.illustration-box').classList.remove('animation-box-out');
            document.querySelector('.illustration-box').classList.add('animation-box-in');
        }
    });
}

btn_questions.forEach(function(element) {
    element.addEventListener('click', function(event) {
        if (flag == 0) {
            close();
            oj_current = this;
            this.nextElementSibling.style.display = 'block';
            flag = 1;
            this.querySelector('img').className = 'arrow-up';
            this.querySelector('p.question').style.fontWeight = 'bold';
            document.querySelector('.illustration-box').classList.add('animation-box-out');
            document.querySelector('.illustration-box').classList.remove('animation-box-in');
        } else {
            close();
            if (oj_current !== this) {
                oj_current = this;
                this.nextElementSibling.style.display = 'block';
                flag = 1;
                this.querySelector('img').className = 'arrow-up';
                this.querySelector('p.question').style.fontWeight = 'bold';
                document.querySelector('.illustration-box').classList.add('animation-box-out');
                document.querySelector('.illustration-box').classList.remove('animation-box-in');
            }
        }

    });
});