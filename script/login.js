        // Password toggle functionality
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            if (type === 'password') {
                togglePassword.classList.remove('fa-eye-slash');
                togglePassword.classList.add('fa-eye');
            } else {
                togglePassword.classList.remove('fa-eye');
                togglePassword.classList.add('fa-eye-slash');
            }
        });

        // Form submission
        const loginForm = document.getElementById('loginForm');
        const loginBtn = document.getElementById('loginBtn');
        const btnText = document.querySelector('.btn-text');
        const btnLoader = document.querySelector('.btn-loader');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Hide previous messages
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';
            
            // Validation
            if (!email || !password) {
                showError('Por favor, preencha todos os campos.');
                return;
            }
            
            if (!isValidEmail(email)) {
                showError('Por favor, digite um email válido.');
                return;
            }
            
            if (password.length < 6) {
                showError('A senha deve ter pelo menos 6 caracteres.');
                return;
            }
            
            // Show loading state
            loginBtn.classList.add('loading');
            btnText.style.opacity = '0';
            btnLoader.style.opacity = '1';
            
            // Simulate API call
            setTimeout(() => {
                // Reset button state
                loginBtn.classList.remove('loading');
                btnText.style.opacity = '1';
                btnLoader.style.opacity = '0';
                
                // Simulate successful login
                if (email === 'admin@example.com' && password === '123456') {
                    showSuccess('Login realizado com sucesso! Redirecionando...');
                    setTimeout(() => {
                        alert('Redirecionando para o dashboard...');
                    }, 1500);
                } else {
                    showError('Email ou senha incorretos. Tente novamente.');
                }
            }, 2000);
        });

        // Social login handlers
        document.getElementById('googleLogin').addEventListener('click', function() {
            showSuccess('Redirecionando para login com Google...');
        });

        document.getElementById('facebookLogin').addEventListener('click', function() {
            showSuccess('Redirecionando para login com Facebook...');
        });

        document.getElementById('appleLogin').addEventListener('click', function() {
            showSuccess('Redirecionando para login com Apple...');
        });

        // Forgot password handler
        document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (email) {
                showSuccess(`Instruções de recuperação foram enviadas para ${email}`);
            } else {
                showError('Por favor, digite seu email primeiro.');
            }
        });

        // Signup link handler
        document.getElementById('signupLink').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecionando para página de cadastro...');
        });

        // Utility functions
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function showSuccess(message) {
            successMessage.textContent = message;
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Add smooth focus transitions
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });

        // Remember me functionality
        const rememberMeCheckbox = document.getElementById('rememberMe');
        const emailInput = document.getElementById('email');

        // Load saved email if remembered
        window.addEventListener('load', function() {
            const savedEmail = localStorage.getItem('rememberedEmail');
            if (savedEmail) {
                emailInput.value = savedEmail;
                rememberMeCheckbox.checked = true;
            }
        });

        // Save email if remember me is checked
        loginForm.addEventListener('submit', function() {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('rememberedEmail', emailInput.value);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
        });

        // Add floating animation to background elements
        setInterval(() => {
            const pattern = document.querySelector('.background-pattern');
            pattern.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`;
        }, 50);
