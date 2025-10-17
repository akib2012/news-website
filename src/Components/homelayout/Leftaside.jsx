import React, { Suspense } from 'react';
import Categories from '../Categories';

const Leftaside = () => {
    return (
        <div>
         <Suspense fallback='loading.....'>
              <Categories></Categories>
         </Suspense>
        </div>
    );
};

export default Leftaside;