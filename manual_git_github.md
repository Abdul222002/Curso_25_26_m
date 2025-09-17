# Manual configurar gitHub por ssh

## Instalacion de la clave en Github
    1. Generar un clave SSH en tu ordenador con el siguiente comando:
       - 'ssh-keygen -t ed25519 -C "thecrack222@gmail.com"'
    2. Luego mostramos la clave para verificar que se ha creado correctamente
        - $ cat ~/.ssh/id_ed25519.pub
    3. Copiamos el contenido de la clave clave publica en este caso y la pegamos en GitHub en nuestro caso que es el que hemos usado
        - Ajustes-> SSH y AGENTES -> Nueva clave SSH

## Añadir la clave a Agent
    1. Abrimos PowerShell en nuestro caso e iniciamos el servicio Agent
        -Get-Service ssh-agent | Set-Service -StartupType Automatic
        -Start-Service ssh-agent
    2. Añadimos la clave privada que esta en la ruta indicada
        -ssh-add ~/.ssh/id_ed25519
## Verificar la clave
    1. Probamos la conexion con GitHub
        - "ssh -T git@github.com"
