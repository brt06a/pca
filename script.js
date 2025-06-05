 <script>
        document.addEventListener('DOMContentLoaded', function () {
            let score = 0;
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function () {
                    if (option.classList.contains('disabled')) return;
                    const parent = option.parentElement;
                    const options = parent.querySelectorAll('.option');
                    options.forEach(opt => opt.classList.add('disabled'));
                    if (option.dataset.correct === "true") {
                        option.classList.add('correct');
                        score++;
                        document.getElementById("score").innerText = score;
                    } else {
                        option.classList.add('incorrect');
                        options.forEach(opt => {
                            if (opt.dataset.correct === "true") opt.classList.add('correct');
                        });
                        parent.querySelector('.correct-answer').style.display = 'block';
                    }
                });
            });
        });
    </script>
