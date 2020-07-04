import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer uOhO1ZymH6FGQUq1lI03GQwm7jC-eY51gIiIXSTJm7DWVW7EoNNN77LBLefFh3-gf8QQtiD20625t7Ztga8WDtRyh9yrYs900odZSWSqYr5ce4TBO0yEQ42HJJv-XnYx'
    }
});