# REST API server for LMS project

## ENV Vars

```env
DATABASE_URL=Your_Postgres_Database_URL
APP_SECRET=token_encryption_secret_for_jwt
NEW_DATABASE=true if you want fresh database at every run
```

## API DOCS

### Teacher Routes

| Use     | URL                 | Method | Params                | Access | Status |
| ------- | ------------------- | ------ | --------------------- | ------ | ------ |
| Login   | /api/teacher/login  | POST   | email, password       | Public | OK     |
| Sign up | /api/teacher/signup | POST   | name, email, password | Public | OK     |

---

### Student Routes

| Use     | URL                    | Method | Params                | Access | Status |
| ------- | ---------------------- | ------ | --------------------- | ------ | ------ |
| Login   | /api/teacher/login     | POST   | email, password       | Public | OK     |
| Sign up | /api/teacher/get_users | POST   | name, email, password | Public | OK     |

---

### Classroom Routes

| Use                        | URL                    | Method | Params            | Access          | Status |
| -------------------------- | ---------------------- | ------ | ----------------- | --------------- | ------ |
| Get classroom by id        | /api/classroom/:id     | GET    | \_\_              | Private         | OK     |
| Create classroom           | /api/classroom/create  | POST   | name, description | Private/Teacher | OK     |
| Get all created classrooms | /api/classroom/created | GET    | \_\_              | Private/Teacher | OK     |
| Join a classroom           | /api/classroom/created | POST   | \_\_              | Private/Student | OK     |
| Get all joined Classroom   | /api/classroom/created | GET    | \_\_              | Private/Student | OK     |

---

### Notes Routes

| Use        | URL                                 | Method | Params            | Access | Status |
| ---------- | ----------------------------------- | ------ | ----------------- | ------ | ------ |
| Post Notes | /api/notes/post_notes/:classroom_id | POST   | name, description | PUBLIC | OK     |
| Get Notes  | /api/notes/get_notes/:classroom_id  | GET    | \_\_              | PUBLIC | OK     |

---

### DEVELOPER/ADMIN ROUTES

They are just for debugging purposes

| Use                | URL                         | Method | Params | Access | Status |
| ------------------ | --------------------------- | ------ | ------ | ------ | ------ |
| Get All Teachers   | /api/teacher/get_all_users  | GET    | \_\_   | PUBLIC | OK     |
| Get All Students   | /api/student/get_all_users  | GET    | \_\_   | PUBLIC | OK     |
| Add dummy Teachers | /api/teacher/add_fake_users | POST   | number | PUBLIC | OK     |
| Get dummy Students | /api/student/add_fake_users | POST   | number | PUBLIC | OK     |
