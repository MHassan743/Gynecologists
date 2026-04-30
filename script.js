            // FAQ Accordion
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                
                // Close others
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                    }
                });

                // Toggle logic
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    header.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
                } else {
                    header.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });
        });

        // Tab Data Array
        const tabData = [
            {
                title: "Holistic Wellness at the Maternity Health Center",
                list: [
                    "Maternal Mental Health Counseling",
                    "Fetal Monitoring and Growth Assessments",
                    "Breastfeeding Support and Lactation Consultation",
                    "Pelvic Floor Therapy and Recovery",
                    "Prenatal Fitness and Exercise Classes"
                ],
                img: "img6.webp"
            },
            {
                title: "Comprehensive Care at the Professional Pregnancy Center",
                list: [
                    "Prenatal care and health consultations",
                    "Ultrasounds and diagnostic imaging services",
                    "Nutritional guidance for expecting mothers",
                    "Labor preparation and childbirth classes",
                    "Postnatal support and wellness programs"
                ],
                img: "img5.webp"
            },
            {
                title: "Expert Care at the Mother and Baby Health Clinic",
                list: [
                    "Maternal Mental Health Counseling",
                    "Fetal Monitoring and Growth Assessments",
                    "Breastfeeding Support and Lactation Consultation",
                    "Pelvic Floor Therapy and Recovery",
                    "Prenatal Fitness and Exercise Classes"
                ],
                img: "img4.webp"
            },
            {
                title: "Personalized Pregnancy Journey at the Family Wellness Center",
                list: [
                    "Prenatal care and health consultations",
                    "Ultrasounds and diagnostic imaging services",
                    "Nutritional guidance for expecting mothers",
                    "Labor preparation and childbirth classes",
                    "Postnatal support and wellness programs"
                ],
                img: "img3.webp"
            },
            {
                title: "Complete Maternity Services at the Women's Health Hub",
                list: [
                    "Maternal Mental Health Counseling",
                    "Fetal Monitoring and Growth Assessments",
                    "Breastfeeding Support and Lactation Consultation",
                    "Pelvic Floor Therapy and Recovery",
                    "Prenatal Fitness and Exercise Classes"
                ],
                img: "img2.webp"
            },
            {
                title: "Nurturing Support at the Comprehensive Maternity Care Clinic",
                list: [
                    "Prenatal care and health consultations",
                    "Ultrasounds and diagnostic imaging services",
                    "Nutritional guidance for expecting mothers",
                    "Labor preparation and childbirth classes",
                    "Postnatal support and wellness programs"
                ],
                img: "img1.webp"
            }
        ];

        // Interactive Tabs Selection Logic
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabTitle = document.getElementById('tab-title');
        const tabList = document.getElementById('tab-list');
        const tabImg = document.getElementById('tab-img');
        const tabContentArea = document.querySelector('.tab-content');

        tabButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                tabButtons.forEach(b => b.classList.remove('active'));
                // Make clicked button active
                btn.classList.add('active');
                
                // Fetch corresponding data
                const data = tabData[index];
                if (data) {
                    // Fade out
                    tabContentArea.style.opacity = '0';
                    
                    setTimeout(() => {
                        // Update Data
                        tabTitle.textContent = data.title;
                        tabImg.src = data.img;
                        // For fallback handling on dummy images
                        tabImg.onerror = function() {
                           this.src = 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&w=800&q=80';
                        };
                        
                        // Clear & Rebuild List
                        tabList.innerHTML = '';
                        data.list.forEach(item => {
                            const li = document.createElement('li');
                            li.innerHTML = '<i class="fa-solid fa-check"></i> ' + item;
                            tabList.appendChild(li);
                        });
                        
                        // Fade in
                        tabContentArea.style.opacity = '1';
                    }, 250); // wait for fade out before changing data
                }
            });
        });

        // Video Modal Logic
        const watchBtn = document.getElementById('watch-highlights-btn');
        const videoModal = document.getElementById('video-modal');
        const closeModal = document.querySelector('.close-modal');
        const ytIframe = document.getElementById('yt-iframe');
        const ytLink = "https://www.youtube.com/embed/1jiFPbsTVls?autoplay=1&origin=https://youtube.com&rel=0";

        if(videoModal && closeModal && ytIframe) {
            if(watchBtn) {
                watchBtn.addEventListener('click', () => {
                    ytIframe.src = ytLink;
                    videoModal.classList.add('active');
                });
            }
            
            document.querySelectorAll('.play-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const videoSrc = btn.getAttribute('data-video');
                    if(videoSrc) {
                        ytIframe.src = videoSrc;
                        videoModal.classList.add('active');
                    }
                });
            });
            
            closeModal.addEventListener('click', () => {
                videoModal.classList.remove('active');
                ytIframe.src = ""; // stop video
            });
            videoModal.addEventListener('click', (e) => {
                if(e.target === videoModal) {
                    videoModal.classList.remove('active');
                    ytIframe.src = "";
                }
            });
        }

        // Hamburger Menu Logic
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navOverlay = document.getElementById('nav-overlay');

        function closeNav() {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
            navOverlay.classList.remove('active');
        }

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('open');
                navLinks.classList.toggle('open');
                navOverlay.classList.toggle('active');
            });
        }
        if (navOverlay) {
            navOverlay.addEventListener('click', closeNav);
        }
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeNav);
        });

        // Smooth Scroll Logic
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetEl = document.querySelector(targetId);
                if(targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });



        // Timeline Click Logic
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // WhatsApp Form Submission Logic
        const aptForm = document.getElementById('whatsapp-apt-form');
        if (aptForm) {
            aptForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent page reload
                
                const name = document.getElementById('apt-name').value;
                const email = document.getElementById('apt-email').value;
                const phone = document.getElementById('apt-phone').value;
                const date = document.getElementById('apt-date').value;
                const doctorSelect = document.getElementById('apt-doctor');
                const doctor = doctorSelect.options[doctorSelect.selectedIndex].text;
                
                // Formulate the WhatsApp message
                const message = `*New Appointment Request* 🩺\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Date:* ${date}\n*Doctor:* ${doctor}`;
                
                // Set your WhatsApp phone number here (include country code without + sign)
                // Defaulting to empty so user adds their own, or standard format
                const whatsappNumber = "923252478888"; // Updated to match clinic contact
                
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                
                window.open(whatsappURL, '_blank');
                
                aptForm.reset();
            });
        }
        // Auto Scroll Testimonials
        const autoScrollGrid = document.getElementById('auto-scroll-grid');
        const scrollProgress = document.getElementById('scroll-progress');
        if (autoScrollGrid) {
            let scrollAmount = 1.5;
            let scrollInterval;
            
            const startScroll = () => {
                scrollInterval = setInterval(() => {
                    autoScrollGrid.scrollLeft += scrollAmount;
                    
                    const maxScroll = autoScrollGrid.scrollWidth - autoScrollGrid.clientWidth;
                    
                    // Reset scroll to 0 when end is reached
                    if (autoScrollGrid.scrollLeft >= maxScroll - 1) { // -1 for rounding flex errors
                        autoScrollGrid.scrollLeft = 0;
                    }
                    
                    // Update progress bar
                    if(scrollProgress && maxScroll > 0) {
                        const percentage = (autoScrollGrid.scrollLeft / maxScroll) * 100;
                        // Keep a minimum width so it looks good at 0
                        scrollProgress.style.width = Math.max(5, percentage) + '%'; 
                    }
                }, 20);
            };
            
            // Start the scroll
            startScroll();
            
            // Pause on mouse hover
            autoScrollGrid.addEventListener('mouseenter', () => clearInterval(scrollInterval));
            autoScrollGrid.addEventListener('mouseleave', startScroll);
            
            // Pause on touch
            autoScrollGrid.addEventListener('touchstart', () => clearInterval(scrollInterval));
            autoScrollGrid.addEventListener('touchend', startScroll);
        }