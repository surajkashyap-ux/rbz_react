import mock from './../mock';

const quickPanelDB = {
    notes : [
        {
            'id'    : 1,
            'title' : 'Best songs to listen while working',
            'detail': 'Last edit: June 29th, 2020'
        },
        {
            'id'    : 2,
            'title' : 'Useful subreddits',
            'detail': 'Last edit: June 10th, 2020'
        }
    ],
    events: [
        {
            'id'   : 1,
            'title': 'Group Meeting',
            'detail' : 'In 32 minutes, Room 1B'
        },
        {
            'id'   : 2,
            'title': 'Coffee Break',
            'detail' : '10:30 AM'
        },
        {
            'id'   : 3,
            'title': 'Lunch',
            'detail' : '11:00 AM'
        },
        {
            'id'   : 4,
            'title': 'Movie',
            'detail' : '12:10 PM'
        },
        {
            'id'   : 5,
            'title': 'Dinner',
            'detail' : '17:30 PM'
        },
        {
            'id'   : 6,
            'title': 'Harpreet\'s Birthday Party',
            'detail' : '19:30 PM'
        },
        {
            'id'   : 7,
            'title': 'Uncle\'s Retirement Party',
            'detail' : '21:30 PM'
        }
    ]
};

mock.onGet('/api/quick-panel/data').reply((config) => {
    return [200, quickPanelDB];
});
