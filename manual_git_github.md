# Manual configurar GitHub por SSH

## Instalación de la clave en GitHub
1. Generar una clave SSH en tu ordenador con el siguiente comando:  
   ```bash
   ssh-keygen -t ed25519 -C "thecrack222@gmail.com"
   ```
   ![Imagen 1](images/image.png)


2. Mostrar la clave para verificar que se ha creado correctamente:  
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

   ![Imagen 2](images/image2.png)

   

3. Copiar el contenido de la **clave pública** y pegarlo en GitHub:  
   - Ajustes → SSH and GPG keys → Nueva clave SSH  

---

## Añadir la clave al Agent
1. Abrir **PowerShell** e iniciar el servicio **ssh-agent**:  
   ```powershell
   Get-Service ssh-agent | Set-Service -StartupType Automatic
   Start-Service ssh-agent
   ```
    ![Imagen 4](images/image4.png)
    ![Imagen 5](images/image5.png)

2. Añadir la clave privada al agente:  
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

---

## Verificar la clave
1. Probar la conexión con GitHub:  
   ```bash
   ssh -T git@github.com
   ```
    ![Imagen 3](images/image3.png)

