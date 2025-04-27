# 🚗 Sistema de Gestión de Automóviles - README

## 📋 Descripción
Aplicación web para administrar un catálogo de vehículos con funcionalidades CRUD completas y sistema de búsqueda avanzada.

## 🛠️ Tecnologías principales
- **Backend**: ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) (Python)
- **Frontend**: ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- **Base de datos**: ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) (configurable para otros motores)

## ⚙️ Requisitos
- ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) 3.8+
- ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) 4.0+
- ![Navegador](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white) moderno

## 🔧 Instalación

1. Clonar repositorio:
```bash
git clone https://github.com/ANDRES-FLORIAN-SALAZAR/gestion-automoviles.git
cd gestion-automoviles
```

2. Crear entorno virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Configurar base de datos:
```bash
python manage.py migrate
```

5. Ejecutar servidor:
```bash
python manage.py runserver
```

## 📂 Estructura del proyecto

```
gestion-automoviles/
├── FlorianApp/           # Aplicación principal
│   ├── static/           # ![CSS](https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3), ![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript), imágenes
│   ├── templates/        # Plantillas ![HTML](https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=html5)
│   ├── models.py         # Modelos de datos
│   └── views.py          # Lógica de la aplicación
├── manage.py             # Script de gestión
└── requirements.txt      # Dependencias
```

## ✨ Funcionalidades clave

- ![Add](https://img.shields.io/badge/-Añadir-2ecc71) Registro de automóviles con todos sus datos
- ![Search](https://img.shields.io/badge/-Buscar-3498db) Búsqueda en tiempo real por múltiples campos
- ![Edit](https://img.shields.io/badge/-Editar-f39c12) Edición de registros existentes
- ![Delete](https://img.shields.io/badge/-Eliminar-e74c3c) Eliminación segura con confirmación
- ![Mobile](https://img.shields.io/badge/-Responsive-9b59b6) Interfaz adaptable a dispositivos móviles

## 💻 Uso

1. Acceder a `http://localhost:8000`
2. Usar el formulario para ![Add](https://img.shields.io/badge/-agregar-2ecc71) nuevos vehículos
3. ![Search](https://img.shields.io/badge/-Buscar-3498db) en el catálogo usando el campo de búsqueda
4. ![Edit](https://img.shields.io/badge/-Editar-f39c12) o ![Delete](https://img.shields.io/badge/-Eliminar-e74c3c) registros con los botones de acción

## 🤝 Contribuciones

![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama con tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un ![Pull Request](https://img.shields.io/badge/-Pull_Request-6f42c1?style=flat-square&logo=github&logoColor=white)

## 📧 Contacto

Para soporte o preguntas:  
[![Email](https://img.shields.io/badge/Email-duvanfloriansalazar@gmail.com-8B89CC?style=flat-square&logo=gmail&logoColor=white)](mailto:duvanfloriansalazar@gmail.com)  
[![GitHub](https://img.shields.io/badge/GitHub-ANDRES--FLORIAN--SALAZAR-181717?style=flat-square&logo=github)](https://github.com/ANDRES-FLORIAN-SALAZAR)

---

**Desarrollado por Duvan Florian Salazar**  
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Django](https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
