type DiscountType = 'PERCENT' | 'FIXED';

const formatPrice = (
  price: number | undefined,
  discountType: DiscountType | undefined,
  returnNumber: boolean,
  discountValue?: number,
): string | number => {
  let finalPrice = price || 0;

  if (price) {
    if (discountValue && discountType === 'PERCENT') {
      const discountedPrice = price * (1 - discountValue / 100);

      finalPrice = Math.floor(discountedPrice);
    } else if (discountValue && discountType === 'FIXED') {
      finalPrice = price - discountValue;
    }
  }
  if (returnNumber) {
    return finalPrice;
  }
  return finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default formatPrice;
