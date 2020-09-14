import mock from './mock';
import './db/todo-db';
import './db/calendar-db';
import './db/faq-db';
import './db/project-dashboard-db';
import './db/notes-db';

mock.onAny().passThrough();
