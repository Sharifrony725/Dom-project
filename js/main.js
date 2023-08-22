const milestoneData = JSON.parse(data).data;

//load course milestone data
function loadMileStones() {
    const mileStones = document.querySelector('.milestones');
    mileStones.innerHTML = `${milestoneData.map(function(){
        return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div>
                <p>
                  ${}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              <div class="module border-b">
                <p>Module Name</p>
              </div>
            </div>
          </div>`;
    }).join("")}`
}
loadMileStones();