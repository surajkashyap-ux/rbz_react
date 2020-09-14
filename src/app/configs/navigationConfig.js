
const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Menu',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'dashboards',
                'title'   : 'Dashboards',
                'type'    : 'item',
                'icon'    : 'dashboard',
                'url'     : '/apps/dashboards/project'
            },
            {
                'id'   : 'calendar',
                'title': 'Calendar',
                'type' : 'item',
                'icon' : 'today',
                'url'  : '/apps/calendar'
            },
            {
                'id'   : 'todo',
                'title': 'To-Do',
                'type' : 'item',
                'icon' : 'check_box',
                'url'  : '/apps/todo',
                'badge': {
                    'title': 3,
                    'bg'   : 'rgb(255, 111, 0)',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'notes',
                'title': 'Notes',
                'type' : 'item',
                'icon' : 'note',
                'url'  : '/apps/notes'
            },
            {
                'id'   : 'faq',
                'title': 'Faq',
                'type' : 'item',
                'icon' : 'help',
                'url'  : '/pages/faq'
            },
        ]
    },
];

export default navigationConfig;
