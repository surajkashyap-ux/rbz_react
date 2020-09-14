import mock from './../mock';

const projectDashboardAppDB = {
    widgets : {
        
        'widget5'      : {
            'title'     : 'AVERAGE',
            'ranges'    : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart' : {
                'TW'     : {
                    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            type                : 'bar',
                            label               : 'Positive',
                            data                : [42, 28, 43, 34, 20, 25, 22],
                            backgroundColor     : '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type                : 'bar',
                            label               : 'Negative',
                            data                : [11, 10, 8, 11, 8, 10, 17],
                            backgroundColor     : '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                '2W'     : {
                    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            type                : 'bar',
                            label               : 'Positive',
                            data                : [37, 32, 39, 27, 18, 24, 20],
                            backgroundColor     : '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type                : 'bar',
                            label               : 'Negative',
                            data                : [9, 12, 9, 12, 7, 8, 16],
                            backgroundColor     : '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                'LW'     : {
                    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            type                : 'bar',
                            label               : 'Positive',
                            data                : [37, 24, 51, 31, 29, 17, 31],
                            backgroundColor     : '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type                : 'bar',
                            label               : 'Negative',
                            data                : [12, 8, 7, 13, 7, 6, 10],
                            backgroundColor     : '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                'options': {
                    responsive         : true,
                    maintainAspectRatio: false,
                    legend             : {
                        display: false
                    },
                    tooltips           : {
                        mode: 'label'
                    },
                    scales             : {
                        xAxes: [
                            {
                                stacked           : true,
                                display           : true,
                                gridLines         : {
                                    display: false
                                },
                                labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                categoryPercentage: 1
                            }
                        ],
                        yAxes: [
                            {
                                stacked  : true,
                                type     : 'linear',
                                display  : true,
                                position : 'left',
                                gridLines: {
                                    display: false
                                },
                                labels   : {
                                    show: true
                                }
                            }
                        ]
                    }
                }
            },
            'supporting': {
                'created'  : {
                    'label': 'TOTAL',
                    'count': {
                        '2W': 352,
                        'LW': 517,
                        'TW': 940
                    },
                    'chart': {
                        '2W'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [5, 8, 5, 6, 7, 8, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'LW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 3, 7, 5, 5, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [3, 2, 1, 4, 8, 8, 4],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        options: {
                            legend             : {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales             : {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'closed'   : {
                    'label': 'GOOD',
                    'count': {
                        '2W': 78,
                        'LW': 191,
                        'TW': 158
                    },
                    'chart': {
                        'TW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 3, 7, 5, 5, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        '2W'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [3, 2, 1, 4, 8, 8, 4],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'LW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 5, 4, 5, 7, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        options: {
                            legend             : {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales             : {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'reOpened' : {
                    'label': 'OKAY',
                    'count': {
                        '2W': 67,
                        'LW': 76,
                        'TW': 210
                    },
                    'chart': {
                        '2W'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 3, 7, 5, 5, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'LW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [5, 7, 8, 8, 6, 4, 1],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [3, 2, 1, 4, 8, 8, 4],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW2'  : [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        options: {
                            legend             : {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales             : {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'wontFix'  : {
                    'label': 'ANXIOUS',
                    'count': {
                        '2W': 70,
                        'LW': 82,
                        'TW': 381
                    },
                    'chart': {
                        '2W'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [5, 7, 4, 6, 5, 3, 2],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'LW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 3, 7, 5, 5, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 5, 4, 5, 7, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        options: {
                            legend             : {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales             : {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'needsTest': {
                    'label': 'STRESSED',
                    'count': {
                        '2W': 95,
                        'LW': 145,
                        'TW': 127
                    },
                    'chart': {
                        '2W'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 5, 4, 5, 7, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'LW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [5, 7, 8, 8, 6, 4, 1],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 3, 7, 5, 5, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        options: {
                            legend             : {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales             : {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'fixed'    : {
                    'label': 'SAD',
                    'count': {
                        '2W': 42,
                        'LW': 23,
                        'TW': 72
                    },
                    'chart': {
                        '2W'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [5, 7, 8, 8, 6, 4, 1],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'LW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [6, 5, 4, 5, 7, 4, 7],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW'   : {
                            datasets: [
                                {
                                    label          : 'Added',
                                    data           : [5, 7, 4, 6, 5, 3, 2],
                                    fill           : true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius    : 0,
                                    pointHitRadius : 20,
                                    borderWidth    : 0
                                }
                            ],
                            labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        options: {
                            legend             : {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales             : {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        },
        'widget6'      : {
            'title'       : 'Mood Distribution Detailed',
            'ranges'      : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'currentRange': 'TW',
            'mainChart'   : {
                labels  : [
                    'Sad',
                    'Good',
                    'Okay',
                    'Stressed',
                    'Anxious'
                ],
                datasets: {
                    'TW': [
                        {
                            data                : [150, 210, 381, 127, 72],
                            backgroundColor     : [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63',
                                '#ffc107'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f',
                                '#ffd341'
                            ]
                        }
                    ],
                    'LW': [
                        {
                            data                : [191, 76, 82, 145, 23],
                            backgroundColor     : [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63',
                                '#ffc107'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f',
                                '#ffd341'
                            ]
                        }
                    ],
                    '2W': [
                        {
                            data                : [78, 67, 70, 95, 42],
                            backgroundColor     : [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63',
                                '#ffc107'

                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f',
                                '#ffd341'
                            ]
                        }
                    ]
                },
                options : {
                    cutoutPercentage   : 66,
                    spanGaps           : false,
                    legend             : {
                        display : true,
                        position: 'bottom',
                        labels  : {
                            padding      : 16,
                            usePointStyle: true
                        }
                    },
                    maintainAspectRatio: false
                }
            },
            'footerLeft'  : {
                'title': 'Total Added',
                'count': {
                    '2W': 352,
                    'LW': 517,
                    'TW': 940
                }
            },
            
        },
        'widget7'      : {
            'title'       : 'Schedule',
            'currentRange': 'T',
            'ranges'      : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            'schedule'    : {
                'T' : [
                    {
                        'id'   : 1,
                        'title': 'Group Meeting',
                        'time' : 'In 32 minutes'
                    },
                    {
                        'id'   : 2,
                        'title': 'Coffee Break',
                        'time' : '10:30 AM'
                    },
                    {
                        'id'   : 3,
                        'title': 'Lunch',
                        'time' : '11:00 AM'
                    },
                    {
                        'id'   : 4,
                        'title': 'Movie',
                        'time' : '12:10 PM'
                    },
                    {
                        'id'   : 5,
                        'title': 'Dinner',
                        'time' : '17:30 PM'
                    },
                    {
                        'id'   : 6,
                        'title': 'Harpreet\'s Birthday Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'id'   : 7,
                        'title': 'Uncle\'s Retirement Party',
                        'time' : '21:30 PM'
                    }
                ],
                'TM': [
                    {
                        'id'   : 1,
                        'title': 'Meeting',
                        'time' : '09:00 AM'
                    },
                    {
                        'id'   : 2,
                        'title': 'Announcement',
                        'time' : '11:00 AM'
                    },
                    {
                        'id'   : 3,
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'id'   : 4,
                        'title': 'Meeting with Brother',
                        'time' : '15:00 AM'
                    },
                    {
                        'id'   : 5,
                        'title': 'Live Stream DOTA',
                        'time' : '17:30 PM'
                    },
                    {
                        'id'   : 6,
                        'title': 'Dinner',
                        'time' : '19:30 PM'
                    },
                    {
                        'id'   : 7,
                        'title': 'CEO\'s Party',
                        'time' : '22:30 PM'
                    }
                ]
            }
        },
        'widget8'      : {
            'title'    : 'Mood Distribution',
            'mainChart': {
                labels  : [
                    'Good',
                    'Okay',
                    'Anxious',
                    'Stressed',
                    'Sad'
                ],
                datasets: [
                    {
                        data                : [9, 7, 2, 2, 1],
                        backgroundColor     : [
                            
                            '#9c27b0',
                            '#03a9f4',
                            '#ffc107',
                            '#e91e63',
                            '#f44336'
                            
                        ],
                        hoverBackgroundColor: [
                            
                            '#a041b0',
                            '#25b6f4',
                            '#ffd341',
                            '#e9487f',
                            '#f45a4d',
                        ]
                    }
                ],
                options : {
                    cutoutPercentage   : 0,
                    spanGaps           : false,
                    legend             : {
                        display : true,
                        position: 'bottom',
                        labels  : {
                            padding      : 16,
                            usePointStyle: true
                        }
                    },
                    maintainAspectRatio: false
                }
            }
        },
        'widget9'      : {
            'title'       : 'Time Spent',
            'ranges'      : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'currentRange': 'TW',
            'weeklySpent' : {
                'title': 'WEEKLY',
                'count': {
                    '2W': '40',
                    'LW': '40',
                    'TW': '40'
                },
                'chart': {
                    '2W'   : {
                        datasets: [
                            {
                                label          : 'Target',
                                data           : [5, 5, 5, 6, 5, 5, 6],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'LW'   : {
                        datasets: [
                            {
                                label          : 'Target',
                                data           : [5, 5, 5, 6, 5, 5, 5],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'TW'   : {
                        datasets: [
                            {
                                label          : 'Target',
                                data           : [2, 6, 5, 4, 5, 3, 6],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    options: {
                        legend             : {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scales             : {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    }
                }
            },
            'totalSpent'  : {
                'title': 'TOTAL SPENT',
                'count': {
                    '2W': '22',
                    'LW': '38',
                    'TW': '34'
                },
                'chart': {
                    '2W'   : {
                        datasets: [
                            {
                                label          : 'Spent',
                                data           : [3, 2, 2, 4, 7, 7, 4],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'LW'   : {
                        datasets: [
                            {
                                label          : 'Spent',
                                data           : [5, 3, 2, 8, 6, 4, 1],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'TW'   : {
                        datasets: [
                            {
                                label          : 'Spent',
                                data           : [6, 4, 7, 5, 5, 4, 7],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    options: {
                        legend             : {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scales             : {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    }
                }
            },
            'remaining'   : {
                'title': 'REMAINING',
                'count': {
                    '2W': '18',
                    'LW': '2',
                    'TW': '6'
                },
                'chart': {
                    '2W'   : {
                        datasets: [
                            {
                                label          : 'Remaining',
                                data           : [1, 4, 5, 7, 8, 2, 4],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'LW'   : {
                        datasets: [
                            {
                                label          : 'Remaining',
                                data           : [3, 2, 1, 4, 8, 8, 4],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'TW'   : {
                        datasets: [
                            {
                                label          : 'Remaining',
                                data           : [2, 4, 1, 6, 2, 6, 1],
                                fill           : true,
                                backgroundColor: '#42BFF7',
                                pointRadius    : 0,
                                pointHitRadius : 20,
                                borderWidth    : 0
                            }
                        ],
                        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    options: {
                        legend             : {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scales             : {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    }
                }
            },
            'totalBudget' : {
                'title': 'TARGET',
                'count': '50'
            }
        },
        
        'widget11'     : {
            'title': 'Team Members',
            'table': {
                'columns': [
                    {
                        'id'   : 'avatar',
                        'title': ''
                    },
                    {
                        'id'   : 'name',
                        'title': 'Name'
                    },
                    {
                        'id'   : 'position',
                        'title': 'Position'
                    },
                    {
                        'id'   : 'office',
                        'title': 'Office'
                    },
                    {
                        'id'   : 'email',
                        'title': 'Email'
                    },
                    {
                        'id'   : 'phone',
                        'title': 'Phone'
                    }
                ],
                'rows'   : [
                    {
                        'id'   : 1,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Jerry Allen'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Johor Bahru'
                            },
                            {
                                id   : 'email',
                                value: 'jallen48@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1 298 032 7774'
                            }
                        ]
                    },
                    {
                        'id'   : 2,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/katherine.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Kumar Anderson'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Sultanabad'
                            },
                            {
                                id   : 'email',
                                value: 'kanderson49@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+91 742 311 1136'
                            }
                        ]
                    },
                    {
                        'id'   : 3,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/garry.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'G Reddy'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Delhi'
                            },
                            {
                                id   : 'email',
                                value: 'gtherapy4r@mail.cc'
                            },
                            {
                                id   : 'phone',
                                value: '+91 862 046 7916'
                            }
                        ]
                    },
                    {
                        'id'   : 4,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/andrew.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Mark Hamil'
                            },
                            {
                                id   : 'position',
                                value: 'Gym Manager'
                            },
                            {
                                id   : 'office',
                                value: 'Alaska'
                            },
                            {
                                id   : 'email',
                                value: 'hamilmark4@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1 139 803 9263'
                            }
                        ]
                    },
                    {
                        'id'   : 5,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/jane.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Kumar Martinez'
                            },
                            {
                                id   : 'position',
                                value: 'Director of Hospital'
                            },
                            {
                                id   : 'office',
                                value: 'Palekastro'
                            },
                            {
                                id   : 'email',
                                value: 'kmartinez4b@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+25 461 022 5393'
                            }
                        ]
                    },
                    {
                        'id'   : 6,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/alice.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Ann Washington'
                            },
                            {
                                id   : 'position',
                                value: 'Gym Owner'
                            },
                            {
                                id   : 'office',
                                value: 'Calicut'
                            },
                            {
                                id   : 'email',
                                value: 'agwashinton4c@mail.edu'
                            },
                            {
                                id   : 'phone',
                                value: '+91 891 619 7138'
                            }
                        ]
                    },
                    {
                        'id'   : 7,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/vincent.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Stephen King'
                            },
                            {
                                id   : 'position',
                                value: 'Human Resources'
                            },
                            {
                                id   : 'office',
                                value: 'Maldives'
                            },
                            {
                                id   : 'email',
                                value: 'sking4d@mail.gov'
                            },
                            {
                                id   : 'phone',
                                value: '+91 984 348 1409'
                            }
                        ]
                    },
                    {
                        'id'   : 8,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/joyce.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Elizabeth Puppala'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Nova Soctia'
                            },
                            {
                                id   : 'email',
                                value: 'lizzyp4@mail.in'
                            },
                            {
                                id   : 'phone',
                                value: '+1 332 067 9063'
                            }
                        ]
                    },
                    {
                        'id'   : 9,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/danielle.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Dorothy Morris'
                            },
                            {
                                id   : 'position',
                                value: 'CEO XYZ Hospitals'
                            },
                            {
                                id   : 'office',
                                value: 'Magsaysay'
                            },
                            {
                                id   : 'email',
                                value: 'dmorris@mail.co.in'
                            },
                            {
                                id   : 'phone',
                                value: '+05 490 558 6120'
                            }
                        ]
                    },
                    {
                        'id'   : 10,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/carl.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Gonzales Gonzales'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Wuhan'
                            },
                            {
                                id   : 'email',
                                value: 'ggonzales@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+03 168 394 9935'
                            }
                        ]
                    },
                    {
                        'id'   : 11,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/profile.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Catherine Theresa'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Kashmir'
                            },
                            {
                                id   : 'email',
                                value: 'ctheresa11@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+91 235 407 5373'
                            }
                        ]
                    },
                    {
                        'id'   : 12,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/garry.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Ruth Garry'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Bengaluru'
                            },
                            {
                                id   : 'email',
                                value: 'rgarrygarry@mail.pl'
                            },
                            {
                                id   : 'phone',
                                value: '+91 128 083 8460'
                            }
                        ]
                    },
                    {
                        'id'   : 13,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Phyllis Phyllis'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'New Haven'
                            },
                            {
                                id   : 'email',
                                value: 'pphyllis@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1 249 861 9304'
                            }
                        ]
                    },
                    {
                        'id'   : 14,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/alice.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Lillian Mahendra'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Berlin'
                            },
                            {
                                id   : 'email',
                                value: 'lmahendra@mail.de'
                            },
                            {
                                id   : 'phone',
                                value: '+59 975 110 3156'
                            }
                        ]
                    },
                    {
                        'id'   : 15,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/vincent.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Jeremy Irons'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Lũng Hồ'
                            },
                            {
                                id   : 'email',
                                value: 'jairons@mail.uk'
                            },
                            {
                                id   : 'phone',
                                value: '+40 341 815 1448'
                            }
                        ]
                    },
                    {
                        'id'   : 16,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/carl.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Arthur Melo'
                            },
                            {
                                id   : 'position',
                                value: 'Nurse'
                            },
                            {
                                id   : 'office',
                                value: 'Sarkanjut'
                            },
                            {
                                id   : 'email',
                                value: 'amelojuve@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+36 631 599 7867'
                            }
                        ]
                    },
                    {
                        'id'   : 17,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/andrew.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'David Suraj'
                            },
                            {
                                id   : 'position',
                                value: 'Social Worker'
                            },
                            {
                                id   : 'office',
                                value: 'Ushumun'
                            },
                            {
                                id   : 'email',
                                value: 'surajasd@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+1 189 681 4417'
                            }
                        ]
                    },
                    {
                        'id'   : 18,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/danielle.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Daniel Johnson'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'São Carlos'
                            },
                            {
                                id   : 'email',
                                value: 'djohnson112@mail.gov'
                            },
                            {
                                id   : 'phone',
                                value: '+60 071 943 7119'
                            }
                        ]
                    },
                    {
                        'id'   : 19,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/joyce.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Ann Maria'
                            },
                            {
                                id   : 'position',
                                value: 'Therapist'
                            },
                            {
                                id   : 'office',
                                value: 'Lisbon'
                            },
                            {
                                id   : 'email',
                                value: 'aamaria@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+91 103 912 6145'
                            }
                        ]
                    },
                    {
                        'id'   : 20,
                        'cells': [
                            {
                                id   : 'avatar',
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id   : 'name',
                                value: 'Phillip Phillips'
                            },
                            {
                                id   : 'position',
                                value: 'VP ABZ Hospitals'
                            },
                            {
                                id   : 'office',
                                value: 'Soba'
                            },
                            {
                                id   : 'email',
                                value: 'ppphillips@mail.com'
                            },
                            {
                                id   : 'phone',
                                value: '+25 810 186 7616'
                            }
                        ]
                    }
                ]
            }
        },
        'weatherWidget': {
            'locations'      : {
                'NewYork': {
                    'name'           : 'Suryapet',
                    'icon'           : 'rainy2',
                    'temp'           : {
                        'C': '22',
                        'F': '72'
                    },
                    'windSpeed'      : {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection'  : 'NW',
                    'rainProbability': '98%',
                    'next3Days'      : [
                        {
                            'name': 'Sunday',
                            'icon': 'rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Monday',
                            'icon': 'cloudy',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Tuesday',
                            'icon': 'windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'NewYork',
            'tempUnit'       : 'C',
            'speedUnit'      : 'KMH'
        }
    },
    projects: [
        {
            'id'  : 1,
            'name': 'Select Your Mood'
        },
        {
            'id'  : 2,
            'name': 'Good'
        },
        {
            'id'  : 3,
            'name': 'Okay'
        },
        {
            'id'  : 4,
            'name': 'Anxious'
        },
        {
            'id'  : 5,
            'name': 'Stressed'
        },
        {
            'id'  : 6,
            'name': 'Sad'
        }
    ]
};

mock.onGet('/api/project-dashboard-app/widgets').reply((config) => {
    return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply((config) => {
    return [200, projectDashboardAppDB.projects];
});
