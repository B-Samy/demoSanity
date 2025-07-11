export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of an blog/feed article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96, 
            }
        },
        {
           name:'titleImage',
           type:'image',
           title: 'Title Image', 
        },
        {
           name: 'smallDescription',
           type:'text',
           title: 'Small Description', 
        },
        {
           name:'content',
           type:'array',
           title: 'Content of the body',
           
           of:[
            {
                type:'block',
            }
           ]
        }


    ]
}