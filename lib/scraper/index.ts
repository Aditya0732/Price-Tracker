// import axios from "axios";
// import * as cheerio from "cheerio";
// import { extractCurrency,extractDescription, extractPrice } from "../utils";

// export async function scrapeAmazonProduct(url: string){
//     if(!url) return;

//     // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_cf493684-zone-unblocker:1kjbw8u3ix67 -k https://lumtest.com/myip.json

//     //BrightData proxy configuration
//     const username = String(process.env.BRIGHT_DATA_USERNAME);
//     const password = String(process.env.BRIGHT_DATA_PASSWORD);
//     const port = 22225;
//     const session_id = (1000000 * Math.random()) | 0;

//     const options = {
//         auth: {
//             username : `${username}-session-${session_id}`,
//             password,
//         },
//         host : 'brd.superproxy.io',
//         port,
//         rejectUnauthorized:false,
//     }
//     try{
//         //fetch product page
//         const response = await axios.get(url,options)
//         const $ = cheerio.load(response.data);

//         const title = $('#title').text().trim();
    
//         const currentPriceStr = extractPrice(
//             $('.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay span.a-price-whole'),
//             $('.a.size.base.a-color-price'),
//             $('.a-button-selected .a-color-base'),
//         );
//         const originalPriceStr = extractPrice(
//             $('#priceblock_ourprice'),
//             $('.a-price.a-text-price span.a-offscreen'),
//             $('#listPrice'),
//             $('#priceblock_dealprice'),
//             $('.a-size-base.a-color-price')
//         );

//         const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

//         const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image') || '{}';

//         const imageUrls = Object.keys(JSON.parse(images));

//         const currency = extractCurrency($('.a-price-symbol'))
//         const disRate = $('.savingsPercentage').text().replace(/[-%]/g, "");
//         var num;
//         if(Number(disRate) > 100){
//             num = parseInt(disRate);
//             num = Math.floor(num/100);
//         }
//         else if(Number(disRate) <= 100){
//             num = Number(disRate);
//         }
//         const discountRateStr = num?.toString();
        


//         const currentPrice = Number(currentPriceStr);
//         const originalPrice = Number(originalPriceStr);
//         const discountRate = Number(discountRateStr);

// // Check if the discountRate is valid (between 0 and 100)
// var FinalCurrentPrice;
// var FinalOriginalPrice;
// if (isNaN(discountRate) || discountRate < 0 || discountRate > 100) {
//   console.log("Invalid discount rate.");
// } else {
//   // Calculate the expected discounted price
//   const expectedPrice = originalPrice - (discountRate * originalPrice) / 100;

//   // Check if the currentPrice matches the expectedPrice
//   if ((currentPrice - expectedPrice) < 1*(currentPrice)/100) {
//     FinalCurrentPrice = currentPrice;
//     FinalOriginalPrice = originalPrice;
//   } else {
//     // Convert currentPrice and originalPrice to half strings
//     FinalCurrentPrice = currentPriceStr.substring(0, Math.ceil(currentPriceStr.length / 2));
//     FinalOriginalPrice = originalPriceStr.substring(0, Math.ceil(originalPriceStr.length / 2));
//   }
// }
// const pcp = FinalCurrentPrice;
// const pop = FinalOriginalPrice;
//         const description = extractDescription($)
//         const data = {
//             url,
//             currency: currency|| '₹',
//             image:imageUrls[0],
//             title,
//             currentPrice:Number(pcp) || Number(pop),
//             originalPrice:Number(pop) || Number(pcp),
//             priceHistory: [],
//             discountRate: Number(discountRateStr),
//             category: 'category',
//             reviewsCount: 100,
//             stars: 4.5,
//             inOutOfStock: outOfStock,
//             description,
//             lowestPrice:Number(pcp) || Number(pop),
//             highestPrice:Number(pop) || Number(pcp),
//             average:Number(pcp) || Number(pop),
//         }

//         return data;
//     }catch(error:any){
//         throw new Error(`Failed to scrape product: ${error.message}`);
//     }
// }








"use server"

import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractCurrency, extractDescription, extractPrice } from '../utils';

export async function scrapeAmazonProduct(url: string) {
  if(!url) return;

  // BrightData proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  }

  try {
    // Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    // Extract the product title
    const title = $('#productTitle').text().trim();
    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('.a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base'),
    );

    const originalPrice = extractPrice(
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    );

    const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

    const images = 
      $('#imgBlkFront').attr('data-a-dynamic-image') || 
      $('#landingImage').attr('data-a-dynamic-image') ||
      '{}'

    const imageUrls = Object.keys(JSON.parse(images));

    const currency = extractCurrency($('.a-price-symbol'))
    const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");

    const description = extractDescription($)

    // Construct data object with scraped information
    const data = {
      url,
      currency: currency || '₹',
      image: imageUrls[0],
      title,
      priceHistory: [],
      discountRate: Number(discountRate),
      category: 'category',
      reviewsCount:100,
      stars: 4.5,
      isOutOfStock: outOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(originalPrice),
      highestPrice: Number(originalPrice) || Number(currentPrice),
      averagePrice: Number(currentPrice) || Number(originalPrice),
      currentPrice: Number(currentPrice) || Number(originalPrice),
      originalPrice: Number(originalPrice) || Number(currentPrice),
    }

    return data;
  } catch (error: any) {
    console.log(error);
  }
}