import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import ProductList from './styled/style';
import LazyLoad from 'react-lazyload';
import Modal from 'react-responsive-modal';

// This is the content of the modal

const ProductModal = ({open, selectedProduct, onCloseModal}) => {
  if(selectedProduct != null && selectedProduct.name && selectedProduct.description && selectedProduct.color && selectedProduct.lens_material && selectedProduct.sex && selectedProduct.price){
      return (
        <Modal open={open} onClose={onCloseModal} center classNames={{ overlay: 'custom-style', modal: 'modalView' }}>
          
          <LazyLoad height={350}>
          <Image cloudName='ace-tate' publicId={selectedProduct.head_female_image ? selectedProduct.head_female_image : selectedProduct.head_male_image }>
          <Transformation flags='progressive'/>
          <Transformation crop='fill' width='450' height='350'/>
          </Image>
          </LazyLoad>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p><span>Color:</span> {selectedProduct.color}</p>
          <p><span>Lens Material:</span> {selectedProduct.lens_material}</p>
          <p><span>Sex:</span> {selectedProduct.sex}</p>
          <p><span>Price:</span> {selectedProduct.price},- EUR</p>
          <button className='buyButton'>Purchase</button>
        </Modal>
      );
    } else {
      return null;
    }
}

export class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      isLoaded: false,
      currentIndex: 0,
      lastIndex: null,
      isLoading: false,
      open: false,
      selectedProduct : null,
    }
    this.onScroll = this.onScroll.bind(this);
  }

  // Initial fetch of products

  productsLoaded = 12;

  //Fetching from the API -> Getting only products which contain variants, and adding a SetTimeout function for the loading screen

  componentDidMount() {
    fetch('https://api.aceandtate.com/api/frames')
      .then(res => res.json())
      .then(json => {
        setTimeout( function() {
        const filteredProducts = json.filter(product => product.variants[0]);
        this.setState({ 
          isLoaded: true,
          product: filteredProducts,
          lastIndex: json.length
        })
        }.bind(this), 7500)
      });
      window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  // Gets the current number of products fetched, and loads the next 12 when scrolling.

  getCurrentProducts () {
     let { currentIndex } = this.state;
     const { product } = this.state;
     let currentProducts = product.slice(0, currentIndex + this.productsLoaded);
     return currentProducts;
  }

  onScroll(){
    let { currentIndex } = this.state;
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)) {
      this.setState({
        currentIndex: (currentIndex + this.productsLoaded) + 1,
        isLoading: true
       })
    }
  }

  onOpenModal = (selectedProduct) => {
    this.setState({ open: true, selectedProduct });
  }
 
  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {
    const { isLoaded, open, selectedProduct } = this.state;

    if (!isLoaded) {
        return <LoadingScreen/>
    }
    
    else {
      let list = this.getCurrentProducts();

      return (
        <ProductList>
        {list.map(product => (
          <li key={product.variants[0].id}>
            <LazyLoad height={363}>
              <Image cloudName='ace-tate' publicId={product.variants[0].front_image}>
                <Transformation flags='progressive'/>
                <Transformation crop='fill' width='2000' height='1855'/>
                <Transformation crop='crop' height='1200' width='960' x='520' y='480'/>
              </Image>
            </LazyLoad>
            <p>{product.variants[0].name}</p>
            <div className='buttonWrapper'>
            <button onClick={() => this.onOpenModal(product.variants[0])}>+ Info</button>
            </div>
          </li>
        ))}
        <ProductModal open={open} selectedProduct={selectedProduct} onCloseModal={this.onCloseModal} />
      </ProductList>
      );
    }
  }
}

export default ProductOverview;