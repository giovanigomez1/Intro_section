const nav = document.querySelector('.nav')
const nav__menu = nav.querySelector('.nav__menu')
const menu_open = nav.querySelector('.nav__menuicon-open')
const menu_close = nav.querySelector('.nav__menuicon-close')
const overlay = document.querySelector('.overlay')


const toggleClass = (menu) => {
  menu_open.classList.toggle('hidden')
  menu_close.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
  nav__menu.style.transform = `translateX(${menu === 'open' ? '-' : ''}100%)`
}

nav.addEventListener('click', function(e) {
  if(e.target.classList.contains('nav__menuicon-open')) {
    toggleClass('open')
  }
  if(e.target.classList.contains('nav__menuicon-close')) {
    toggleClass('close')
  }
})

<!-- Bizzabo "RSVP" Registration Flow Widget Begin -->
<script type = "text/javascript"
    id="bz-popup-registration-script-33f882d6-8e27-4f12-a9cd-9fb18814d3f6"
    data-event-id="784813"
    data-registration-proxy="true"
    data-unique-name="mobileapp"
    data-flow-id="33f882d6-8e27-4f12-a9cd-9fb18814d3f6"
    data-inline-widget="true"
    data-element-id="" data-element-class="registration">
    (function() {
            var bz = document.createElement("script");
            bz.type = "text/javascript";
            bz.async = true;
            bz.setAttribute("data-flow-id","33f882d6-8e27-4f12-a9cd-9fb18814d3f6")
            bz.setAttribute("data-inline-widget", "true")
            bz.src = "https://organizer.bizzabo.com/widgets/flows/popup/registrationPopup.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bz, s);
        })();
</script>
<!-- Bizzabo "RSVP" Registration Flow Widget End -->

