let currentPage = 1;
const numberOfProjects = 10;
// This will store all projects received from API 
let allProjects = [];
let departments = []
let departmentsArray = []

function renderProjects(projects) {

    //pagination calculation
    const totalProjects = projects.length;

    const totalPages = Math.ceil(
        totalProjects / numberOfProjects
    );

    const startIndex = (currentPage - 1) * numberOfProjects;

    const endIndex = startIndex + numberOfProjects;

    const projectsOnPage = projects.slice(
        startIndex,
        endIndex
    );
    console.log(startIndex, endIndex)

    // render projects on page  
    document.querySelector("#projectList").innerHTML = projectsOnPage.map((project, i) => `
                             <tr>
                        <th scope="row">${startIndex + i + 1}</th>
                        <td>${project.ProjectName}
                            <br>
                            <i>${project.Details}</i>
                        </td>
                        <td>${project.Department}</td>
                        <td>${project.priority}</td>
                        <td>${project.startDate}</td>
                        <td>${project.EndDate}</td>
                        <td>${project.status}</td>
                    </tr>
    `).join("")

    // pagination on webpage 
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    document.querySelector("#pagination1").innerHTML = ` 
                            <li class="page-item ${currentPage === 1 ? "disabled" : ""}"> 
                            <a class="page-link" href="#" data-page="
                            ${currentPage - 1}
                            "> Previous </a>
                            </li> 
                            ${pages.map(page => ` 
                                <li class="page-item ${page === currentPage ? "active" : ""}"> 
                                <a class="page-link" href="#" data-page="${page}"> 
                                ${page} 
                                </a>
                            </li> `).join("")}
                            <li class="page-item ${currentPage === totalPages ? "disabled" : ""}"> 
                            <a class="page-link" href="#" data-page="${currentPage + 1}"> 
                            Next 
                            </a> 
                            </li> `;


    // ----------------------------- // PAGE CLICK // ----------------------------- 
    document.querySelector("#pagination1").onclick = function (e) {
        e.preventDefault();
        const page = Number(e.target.dataset.page);
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            currentPage = page;
            renderProjects(projects);
        }
    };
}

function SearchByTitle() {
    searchKey = document.querySelector("#searchProject").value
    console.log(searchKey)
    // add condition ig searchKey is empty 
    projectsListBySearch = allProjects.filter(proj => {
        return proj.ProjectName.toLowerCase().includes(searchKey.toLowerCase())
    })
    console.log(projectsListBySearch)

    renderProjects(projectsListBySearch)
}





async function fetchData() {
    await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
        .then(res => res.json())
        .then(data => {
            allProjects = data;

            currentPage = 1;
            departments = new Set(data.map(p => {
                // return [...new Set(p.department)]
                // return Array.from(new Set(p.department))
                return p.Department
            }))
            console.log(departments)
            departmentsArray = [...departments]
            console.log(departmentsArray)
            document.querySelector("#deptRender").innerHTML = `
        <select id="departmentFilter" class="form-select">
        <option value="">All Departments</option>
            ${departmentsArray.map(d => `
            <option value=${d}>${d}</option>
            `).join("")}
        </select>
`;

            document.querySelector("#departmentFilter").addEventListener("change", () => {
                deptKey = document.querySelector("#departmentFilter").value
                projectsByDeptKey = allProjects.filter((proj) => {
                    // add condition for select All projects 
                    return proj.Department == deptKey
                })
                renderProjects(projectsByDeptKey)
            })
            // code for filter by priority 
            // code for filter by status 
            renderProjects(data)
        })
        .catch(error => console.log(error))
}

// show loader while fetching data 
window.addEventListener("load", fetchData)