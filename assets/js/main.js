// Mobile menu toggle code
const openMobileMenu = document.querySelector('#mobile-menu-open');
const closeMobileMenu = document.querySelector('.mobile-menu-close');
const mobileMenuWrapper = document.querySelector('.top-nav-mobile');
const mobileMenuState = {
  open: 'block',
  close: 'none',
};

function toggleMobileMenu(state) {
  if (state === mobileMenuState.open) {
    mobileMenuWrapper.style.display = mobileMenuState.open;
  } else {
    mobileMenuWrapper.style.display = mobileMenuState.close;
  }
}

openMobileMenu.addEventListener('click', () => { toggleMobileMenu(mobileMenuState.open); });
closeMobileMenu.addEventListener('click', () => { toggleMobileMenu(mobileMenuState.close); });

// Instructor content generator code starts here
const instructorData = [
  {
    id: 0,
    instructorName: 'Aqurds',
    instructorTechStack: 'Full Stack Software Engineer',
    details: 'With a rich experience developing full stack application, now focusing on Machine learning. Solution architect is another field, investing significant time to research and study.',
    instructorPhoto: './assets/image/speaker_01.png',
  },
  {
    id: 1,
    instructorName: 'Aqurds',
    instructorTechStack: 'Full Stack Software Engineer',
    details: 'With a rich experience developing full stack application, now focusing on Machine learning. Solution architect is another field, investing significant time to research and study.',
    instructorPhoto: './assets/image/speaker_01.png',
  },
  {
    id: 2,
    instructorName: 'Aqurds',
    instructorTechStack: 'Full Stack Software Engineer',
    details: 'With a rich experience developing full stack application, now focusing on Machine learning. Solution architect is another field, investing significant time to research and study.',
    instructorPhoto: './assets/image/speaker_01.png',
  },
  {
    id: 3,
    instructorName: 'Aqurds',
    instructorTechStack: 'Full Stack Software Engineer',
    details: 'With a rich experience developing full stack application, now focusing on Machine learning. Solution architect is another field, investing significant time to research and study.',
    instructorPhoto: './assets/image/speaker_01.png',
  },
  {
    id: 4,
    instructorName: 'Aqurds',
    instructorTechStack: 'Full Stack Software Engineer',
    details: 'With a rich experience developing full stack application, now focusing on Machine learning. Solution architect is another field, investing significant time to research and study.',
    instructorPhoto: './assets/image/speaker_01.png',
  },
  {
    id: 5,
    instructorName: 'Aqurds',
    instructorTechStack: 'Full Stack Software Engineer',
    details: 'With a rich experience developing full stack application, now focusing on Machine learning. Solution architect is another field, investing significant time to research and study.',
    instructorPhoto: './assets/image/speaker_01.png',
  },
];

function loadInstructorProfile() {
  let htmlSkeletonToInsert = '';
  function insertData(data) {
    htmlSkeletonToInsert += `
    <div class="single-speaker">
      <img src="${data.instructorPhoto}" alt="" srcset="">
      <h3>${data.instructorName}</h3>
      <h5>${data.instructorTechStack}</h5>
      <div class="h5-liner"></div>
      <p>
          ${data.details}
      </p>
    </div>
    `;
  }
  instructorData.map(insertData);
  document.querySelector('.speaker-wrapper-inner').innerHTML = htmlSkeletonToInsert;
}
loadInstructorProfile();
