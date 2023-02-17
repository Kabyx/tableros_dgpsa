import streamlit as st

import streamlit.components.v1 as components

components.html(""""
    <script src="script.js"></script>
</head>
<body>
    <nav class="nav_menu" >
        <div class="menu_container" id="navbar">
            <ul class="menu_1">
                <li><span class="material-icons"></span><a href="index.html" class="menu_1_opcion_1--active">Inicio</a></li>
                <li><a href="#" class="menu_1_opcion_2"></a></li>
            </ul>
        </div>
    </nav>
    <div class="background">
        <div class="powerbi">
            <iframe class = "tablero" title="Indicadores - Seguimiento Mensual - a Agosto 2022 - Indicadores" width="47%" height="580" src="https://app.powerbi.com/view?r=eyJrIjoiZTdjZGYwNzItMjY5ZC00MWQyLWJkM2UtOTBhMDM1M2NkMzE4IiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
            <iframe class = "tablero" title="abandonos - Sustancias" width="47%" height="580" src="https://app.powerbi.com/view?r=eyJrIjoiNDVkNTk0MzEtZDIzNC00OTU4LWE4MmMtMjcxZGUwOGRlMDIxIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
            <iframe class = "tablero" title="ASA - Estadísticas 2022" width="95.3%" height="580" src="https://app.powerbi.com/view?r=eyJrIjoiYTE5MThiZjctYjIxZC00OWQzLWI3ODAtNzA3OGYwM2EyMmMwIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </div>
    <footer>
        <div class="footer_sd">Sistematización de datos</div>
    </footer>
</body>
    
""",
height=1600,width=1600,scrolling = True)
