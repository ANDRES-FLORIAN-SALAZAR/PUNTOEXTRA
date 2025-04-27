document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const autoForm = document.getElementById('autoForm');
    const autoTable = document.getElementById('autoTable');
    const autoTableBody = document.getElementById('autoTableBody');
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.querySelector('.search-icon');
    const emptyMessage = document.getElementById('emptyMessage');
    const btnCancelar = document.getElementById('btnCancelar');
    const loading = document.getElementById('loading');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    const closeNotification = document.getElementById('closeNotification');
    const confirmDeleteModal = document.getElementById('confirmDeleteModal');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');

    // Estado de la aplicación
    let autos = JSON.parse(localStorage.getItem('autos')) || [];
    let currentAutoId = null;
    let autoToDeleteId = null;

    // Inicialización
    renderTable();

    // Event Listeners
    autoForm.addEventListener('submit', handleFormSubmit);
    btnCancelar.addEventListener('click', resetForm);
    searchInput.addEventListener('input', handleSearch);
    searchIcon.addEventListener('click', performSearch);
    closeNotification.addEventListener('click', hideNotification);
    confirmDelete.addEventListener('click', deleteConfirmed);
    cancelDelete.addEventListener('click', closeDeleteModal);

    // Funciones principales
    function renderTable(data = null) {
        const autosToRender = data || autos;
        autoTableBody.innerHTML = '';
        
        if (autosToRender.length === 0) {
            emptyMessage.classList.remove('hidden');
            return;
        }
        
        emptyMessage.classList.add('hidden');
        
        autosToRender.forEach(auto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${auto.nombre}</td>
                <td>${auto.marca}</td>
                <td>${auto.modelo}</td>
                <td>${auto.diseno}</td>
                <td>${auto.cilindraje}</td>
                <td class="action-buttons">
                    <button class="btn btn-warning btn-sm" onclick="editAuto('${auto.id}')">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="confirmDeleteAuto('${auto.id}')">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            `;
            autoTableBody.appendChild(row);
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const autoData = {
            id: currentAutoId || Date.now().toString(),
            nombre: document.getElementById('nombre').value,
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            diseno: document.getElementById('diseno').value,
            cilindraje: document.getElementById('cilindraje').value
        };
        
        if (currentAutoId) {
            // Editar existente
            const index = autos.findIndex(auto => auto.id === currentAutoId);
            if (index !== -1) {
                autos[index] = autoData;
                showNotification('Automóvil actualizado', 'success');
            }
        } else {
            // Nuevo automóvil
            autos.push(autoData);
            showNotification('Automóvil agregado', 'success');
        }
        
        localStorage.setItem('autos', JSON.stringify(autos));
        renderTable();
        resetForm();
    }

    function handleSearch() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            performSearch();
        }, 300);
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Animación de la lupa
        searchIcon.classList.add('fa-spin');
        
        if (!searchTerm) {
            renderTable();
            searchIcon.classList.remove('fa-spin');
            return;
        }
        
        const filtered = autos.filter(auto => 
            auto.nombre.toLowerCase().includes(searchTerm) ||
            auto.marca.toLowerCase().includes(searchTerm) ||
            (auto.diseno && auto.diseno.toLowerCase().includes(searchTerm)) ||
            (auto.modelo && auto.modelo.toString().includes(searchTerm))
        );
        
        renderTable(filtered);
        
        // Quitar animación después de 500ms
        setTimeout(() => {
            searchIcon.classList.remove('fa-spin');
        }, 500);
    }

    function resetForm() {
        autoForm.reset();
        document.getElementById('autoId').value = '';
        currentAutoId = null;
        
        const submitButton = autoForm.querySelector('button[type="submit"]');
        submitButton.innerHTML = '<i class="fas fa-save"></i> Guardar';
    }

    function showNotification(message, type = 'success') {
        notificationMessage.textContent = message;
        notification.className = 'notification';
        notification.classList.add(type);
        notification.style.display = 'block';
        
        setTimeout(hideNotification, 5000);
    }

    function hideNotification() {
        notification.style.display = 'none';
    }

    function confirmDeleteAuto(id) {
        autoToDeleteId = id;
        confirmDeleteModal.style.display = 'flex';
    }

    function deleteConfirmed() {
        if (autoToDeleteId) {
            autos = autos.filter(auto => auto.id !== autoToDeleteId);
            localStorage.setItem('autos', JSON.stringify(autos));
            renderTable();
            closeDeleteModal();
            showNotification('Automóvil eliminado', 'success');
        }
    }

    function closeDeleteModal() {
        confirmDeleteModal.style.display = 'none';
        autoToDeleteId = null;
    }

    // Funciones globales para los botones
    window.editAuto = function(id) {
        const auto = autos.find(a => a.id === id);
        if (auto) {
            document.getElementById('autoId').value = auto.id;
            document.getElementById('nombre').value = auto.nombre;
            document.getElementById('marca').value = auto.marca;
            document.getElementById('modelo').value = auto.modelo;
            document.getElementById('diseno').value = auto.diseno;
            document.getElementById('cilindraje').value = auto.cilindraje;
            
            currentAutoId = auto.id;
            
            const submitButton = autoForm.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-sync"></i> Actualizar';
            
            // Scroll suave al formulario
            document.querySelector('.form-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    
    window.confirmDeleteAuto = confirmDeleteAuto;
});