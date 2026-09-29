const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`
export const IMG = {
  hero: u('1544025162-d76694265947'),
  tandoori: u('1599487488170-d11ec9c172f0'),
  biryani: u('1563379091339-03b21ab4a4f8'),
  tikka: u('1610057099443-fde8c4d50f91'),
  prawns: u('1565680018434-b513d5e5fd47'),
  kebab: u('1555939594-58d7cb561ad1'),
  peri: u('1529692236671-f1f6cf9683ba'),
  curry: u('1601050690597-df0568f70950'),
}
export const signature = [
  { name: 'Smoky Tandoori Chicken', desc: 'Clay-oven roasted, charred edges, mint chutney.', price: 349, rating: 4.9, img: IMG.tandoori },
  { name: 'Mutton Dum Biryani', desc: 'Slow-sealed basmati layered with tender mutton.', price: 399, rating: 4.8, img: IMG.biryani },
  { name: 'Chicken Tikka', desc: 'Yoghurt-marinated cubes grilled over live coals.', price: 299, rating: 4.7, img: IMG.tikka },
  { name: 'Butter Garlic Prawns', desc: 'Juicy prawns tossed in garlic butter and herbs.', price: 449, rating: 4.8, img: IMG.prawns },
  { name: 'Seekh Kebab', desc: 'Spiced minced lamb skewers, smoky and succulent.', price: 329, rating: 4.7, img: IMG.kebab },
  { name: 'Peri Peri Chicken', desc: 'Fiery peri peri glaze, flame-grilled to order.', price: 299, rating: 4.6, img: IMG.peri },
]
export const categories = ['All', 'Chicken', 'Mutton', 'Seafood', 'Biryani']
export const menu = [
  { name: 'Smoky Tandoori Chicken', cat: 'Chicken', price: 349, img: IMG.tandoori },
  { name: 'Chicken Tikka', cat: 'Chicken', price: 299, img: IMG.tikka },
  { name: 'Peri Peri Chicken', cat: 'Chicken', price: 299, img: IMG.peri },
  { name: 'Butter Chicken', cat: 'Chicken', price: 379, img: IMG.curry },
  { name: 'Seekh Kebab', cat: 'Mutton', price: 329, img: IMG.kebab },
  { name: 'Mutton Rogan Josh', cat: 'Mutton', price: 429, img: IMG.curry },
  { name: 'Butter Garlic Prawns', cat: 'Seafood', price: 449, img: IMG.prawns },
  { name: 'Tandoori Fish Tikka', cat: 'Seafood', price: 399, img: IMG.tikka },
  { name: 'Mutton Dum Biryani', cat: 'Biryani', price: 399, img: IMG.biryani },
  { name: 'Chicken Hyderabadi Biryani', cat: 'Biryani', price: 349, img: IMG.biryani },
]
export const gallery = [IMG.hero, IMG.tandoori, IMG.biryani, IMG.prawns, IMG.kebab, IMG.peri]
export const stats = [
  { label: 'Years of Flavour', value: 12, suffix: '+' },
  { label: 'Happy Guests', value: 50, suffix: 'K+' },
  { label: 'Signature Dishes', value: 40, suffix: '+' },
  { label: 'Avg. Rating', value: 4.8, suffix: '★', decimals: 1 },
]
export const reviews = [
  { name: 'Aarav Mehta', role: 'Food Blogger', text: 'The Mutton Dum Biryani is easily the best I have had in the city. Perfectly spiced, incredibly tender.' },
  { name: 'Priya Nair', role: 'Regular Guest', text: 'Smoky tandoori, warm service and a gorgeous ambience. Our go-to for every family weekend.' },
  { name: 'Rohan Deshmukh', role: 'Chef & Critic', text: 'Honest fire-cooking with serious technique. The butter garlic prawns are dangerously good.' },
]
