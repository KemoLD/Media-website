export const categories = [
    {
      name: 'cars',
      image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg',
    },
    {
      name: 'fitness',
      image: 'https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg',
    },
    {
        name: 'sports',
        image: 'https://i.pinimg.com/564x/06/1f/16/061f16ead1746a7e4d0300733373f53a.jpg',
    },
    {
      name: 'wallpapers',
      image: 'https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg',
    },
    {
      name: 'portraits',
      image: 'https://i.pinimg.com/564x/0f/9a/6f/0f9a6f86e2806b20e766fd3ae2897257.jpg',
    },
    {
        name: 'group portraits',
        image: 'https://i.pinimg.com/564x/75/49/ef/7549efa6d6e373573d02ede4dee5a8f0.jpg',
    },
    {
        name: 'social events',
        image: 'https://i.pinimg.com/564x/f3/e4/55/f3e455ec8b3a14e9a3b795bac01c8935.jpg',
    },
    {
      name: 'food',
      image: 'https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg',
    },
    {
      name: 'nature',
      image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
    },
    {
      name: 'art',
      image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
    }, {
      name: 'travel',
      image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
    },
    {
      name: 'quotes',
      image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg',
    }, 
    {
      name: 'Pets',
      image: 'https://i.pinimg.com/236x/1b/c8/30/1bc83077e363db1a394bf6a64b071e9f.jpg',
    },
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
  ];



export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
};

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
    image{
        asset->{
          url
        }
    },
    _id,
    destination,
    postedBy->{
        _id,
        userName,
        image
    },
        save[]{
            _key,
            postedBy->{
                _id,
                userName,
                image
            },
        },
    }`;
    return query;
}

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
        asset->{
            url
        }
    },
    _id,
    destination,
    postedBy->{
        _id,
        userName,
        image
    },
    save[]{
        _key,
        postedBy->{
            _id,
            userName,
            image
        },
    },
} `;

export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
        image{
            asset->{
            url
            }
        },
        _id,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            postedBy->{
            _id,
            userName,
            image
            },
        },
    }`;
    return query;
};

export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
        image{
            asset->{
            url
            }
        },
        _id,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            postedBy->{
            _id,
            userName,
            image
            },
        },
    }`;
    return query;
};

export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
        image{
            asset->{
            url
            }
        },
        _id,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            _key,
            postedBy->{
            _id,
            userName,
            image
            },
        },
    }`;
    return query;
};

export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
        image{
            asset->{
            url
            }
        },
        _id,
        title, 
        about,
        category,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            postedBy->{
            _id,
            userName,
            image
            },
        },
        comments[]{
            comment,
            _key,
            postedBy->{
            _id,
            userName,
            image
            },
        }
    }`;
    return query;
};