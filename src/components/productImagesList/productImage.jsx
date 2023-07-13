import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const ProductImageList = ({itemData}) => {
    return(
        <ImageList sx={{ width: 40,}} cols={1} rowHeight={50}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.Name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    );
}

export default ProductImageList;