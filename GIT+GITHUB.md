# Guía Básica de Git y GitHub (Sin Ramas)

## Configuración inicial

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

> Configura tu nombre y correo para que Git los use en tus commits.

---

## Crear o clonar un repositorio

```bash
git init
```
> Inicializa un nuevo repositorio Git en el directorio actual.

```bash
git clone https://github.com/usuario/repositorio.git
```
> Clona un repositorio existente de GitHub.

---

## Comandos básicos para trabajar

```bash
git status
```
> Muestra los archivos modificados y su estado.

```bash
git add .
```
> Añade todos los archivos al área de preparación (staging).

```bash
git commit -m "Mensaje del commit"
```
> Guarda los cambios en el historial del repositorio.

```bash
git log
```
> Muestra el historial de commits.

---

## Subir a GitHub

```bash
git remote add origin https://github.com/usuario/repositorio.git
```
> Conecta tu repositorio local con uno en GitHub.

```bash
git push -u origin master
```
> Sube tus commits al repositorio remoto por primera vez.

```bash
git push
```
> Sube cambios al repositorio remoto (una vez configurado el remote).

---

## Actualizar tu repositorio local

```bash
git pull
```
> Trae los últimos cambios del repositorio remoto y los combina con tu rama actual.

---

## Flujo de trabajo básico sin ramas

1. Crea o clona un repositorio.
2. Haz cambios en tus archivos.
3. Usa `git add .` para prepararlos.
4. Usa `git commit -m "Mensaje"` para registrarlos.
5. Usa `git push` para subirlos a GitHub.

---

✅ ¡Con eso ya puedes empezar a usar Git y GitHub de forma básica!