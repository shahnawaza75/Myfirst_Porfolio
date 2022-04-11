const mbar=document.getElementById('pop');
const Close_m=document.querySelector('.close');
const m_popup=document.querySelector('.menu-up-container');

mbar.addEventListener('click',()=>{
    m_popup.classList.add('pop-up');
});

Close_m.addEventListener('click',()=>{
    m_popup.classList.remove('pop-up');
});

m_popup.addEventListener('click',()=>{
    m_popup.classList.remove('pop-up');
});