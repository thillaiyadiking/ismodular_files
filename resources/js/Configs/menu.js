import { ZiggyVue } from '/vendor/tightenco/ziggy/dist/index.esm.js'

export default {
    // main navigation - side menu
    items: [
        {
            label: 'Dashboard',
            permission: 'Main Menu: Dashboard',
            icon: 'ri-dashboard-line',
            link: route('dashboard.index')
        },
        {
            label: 'Nasik',
            permission: 'Fathil',
            icon: 'ri-dashboard-line',
            link: route('aclPermission.create')
        },

        {
            label: 'Access Control List',
            permission: 'Main Menu: Access Control List',
            children: [
                {
                    label: 'Users',
                    permission: 'Main Menu: Access Control List: Users - List',
                    icon: 'ri-user-line',
                    link: route('user.index')
                },
                {
                    label: 'Permissions',
                    permission:
                        'Main Menu: Access Control List: Permissions - List',
                    icon: 'ri-shield-keyhole-line',
                    link: route('aclPermission.index')
                },
                {
                    label: 'Roles',
                    permission: 'Main Menu: Access Control List: Roles - List',
                    icon: 'ri-account-box-line',
                    link: route('aclRole.index')
                }
            ]
        },
        {
            label: 'Blog',
            permission: 'Blog',
            children: [
                {
                    label: 'Posts',
                    permission: 'Blog: Post - List',
                    icon: 'ri-draft-line',
                    link: route('blogPost.index')
                },
                {
                    label: 'Categories',
                    permission: 'Blog: Category - List',
                    icon: 'ri-folders-line',
                    link: route('blogCategory.index')
                },
                {
                    label: 'Tags',
                    permission: 'Blog: Tag - List',
                    icon: 'ri-price-tag-3-line',
                    link: route('blogTag.index')
                },
                {
                    label: 'Authors',
                    permission: 'Blog: Author - List',
                    icon: 'ri-team-line',
                    link: route('blogAuthor.index')
                }
            ]
        },
    ]
}
