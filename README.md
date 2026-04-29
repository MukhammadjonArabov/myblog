## Web Service Hub (Django)

High-converting landing platform for selling:
- Website development
- Telegram bot automation

Admin-managed portfolio + testimonials (Jazzmin UI).

### Tech
- **Backend**: Django + PostgreSQL
- **Env vars**: `python-dotenv`
- **DB driver**: `psycopg2-binary`
- **Admin UI**: `django-jazzmin`
- **Frontend**: HTML/CSS/Vanilla JS (multi-language + dark/light mode)

### Setup (Windows / PowerShell)

Create `.env`:

1) Copy `.env.example` to `.env` and edit values.

Install dependencies (inside your existing `venv`):

```bash
venv\Scripts\python -m pip install -r requirements.txt
```

Run migrations:

```bash
venv\Scripts\python manage.py makemigrations
venv\Scripts\python manage.py migrate
```

Create admin user:

```bash
venv\Scripts\python manage.py createsuperuser
```

Start server:

```bash
venv\Scripts\python manage.py runserver
```

### URLs
- **Landing**: `/`
- **Admin (Jazzmin)**: `/admin/`

### Admin content
In `/admin/` you can add/edit/delete:
- **Portfolio**: title + before/after descriptions
- **Testimonials**: name + text + language (uz/ru/en)

