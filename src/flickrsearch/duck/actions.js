import fetch from 'cross-fetch';

import * as TYPES from './types';

const { RECEIVE_IMAGES, REQUEST_IMAGES } = TYPES;

export const receiveImages = (data) => ({
  type: RECEIVE_IMAGES,
  data,
});

export const requestImages = () => ({
  type: REQUEST_IMAGES,
});

export const fetchImages = (data) => {
  return dispatch => {
    dispatch(requestImages());

    if (data !== '') {
      // The flickr api returns a cors issue when I attempt to request for the data
      // I can't guarantee uncommenting this code will work 100% regarding the
      //  response
      /**
      fetch(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${data}&format=json`)
        .then(response => {
          dispatch(receiveImages(response.data.items));
        })
        .catch(error => {
          console.error(error);
        });
      **/

      // Instead I will dispatch some data I retrieved from performing a request
      // from a REST client
      const response = {
        "title": "Recent Uploads tagged dog",
        "link": "https:\/\/www.flickr.com\/photos\/tags\/dog\/",
        "description": "",
        "modified": "2020-02-22T06:33:47Z",
        "generator": "https:\/\/www.flickr.com",
        "items": [
          {
            "title": "Friends",
            "link": "https:\/\/www.flickr.com\/photos\/hubi-pics\/49567641543\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567641543_d6428d5ea4_m.jpg"
            },
            "date_taken": "2008-04-12T12:17:33-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hubi-pics\/\">anubishubi<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hubi-pics\/49567641543\/\" title=\"Friends\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567641543_d6428d5ea4_m.jpg\" width=\"240\" height=\"221\" alt=\"Friends\" \/><\/a><\/p> ",
            "published": "2020-02-22T06:33:47Z",
            "author": "nobody@flickr.com (\"anubishubi\")",
            "author_id": "61417065@N04",
            "tags": "pentaxk100d pet haustier dog hund"
          },
          {
            "title": "Batumi",
            "link": "https:\/\/www.flickr.com\/photos\/letalka\/49567578128\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567578128_6af143ba09_m.jpg"
            },
            "date_taken": "2020-02-21T17:50:27-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/letalka\/\">letalka<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/letalka\/49567578128\/\" title=\"Batumi\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567578128_6af143ba09_m.jpg\" width=\"240\" height=\"160\" alt=\"Batumi\" \/><\/a><\/p> ",
            "published": "2020-02-22T06:06:38Z",
            "author": "nobody@flickr.com (\"letalka\")",
            "author_id": "144466949@N02",
            "tags": "georgia batumi dog street"
          },
          {
            "title": "\"Watcha eating?\"",
            "link": "https:\/\/www.flickr.com\/photos\/patrickkingsley\/49567544473\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567544473_93c7a085eb_m.jpg"
            },
            "date_taken": "2020-02-20T22:05:11-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/patrickkingsley\/\">Patrick Kingsley<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/patrickkingsley\/49567544473\/\" title=\"&quot;Watcha eating?&quot;\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567544473_93c7a085eb_m.jpg\" width=\"240\" height=\"160\" alt=\"&quot;Watcha eating?&quot;\" \/><\/a><\/p> ",
            "published": "2020-02-22T05:50:51Z",
            "author": "nobody@flickr.com (\"Patrick Kingsley\")",
            "author_id": "187072539@N06",
            "tags": "dog puppy husky dinner kitchen family food"
          },
          {
            "title": "DSC_6937-1-2",
            "link": "https:\/\/www.flickr.com\/photos\/polkadjango\/49567994626\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567994626_c895cffb91_m.jpg"
            },
            "date_taken": "2020-02-22T13:42:40-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/polkadjango\/\">Polka &amp; Django<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/polkadjango\/49567994626\/\" title=\"DSC_6937-1-2\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567994626_c895cffb91_m.jpg\" width=\"240\" height=\"160\" alt=\"DSC_6937-1-2\" \/><\/a><\/p> <p>Nikon Z50, Ai-S Nikkor 28-50mm F3.5<\/p>",
            "published": "2020-02-22T05:26:50Z",
            "author": "nobody@flickr.com (\"Polka & Django\")",
            "author_id": "48668355@N04",
            "tags": "nikonz50 aisnikkor2850mmf35 brittany spaniel dog bw"
          },
          {
            "title": "Let Sleeping Dogs Lie",
            "link": "https:\/\/www.flickr.com\/photos\/186315905@N02\/49568157432\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49568157432_73ba067095_m.jpg"
            },
            "date_taken": "2020-02-21T04:13:33-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/186315905@N02\/\">Robin Loud 64<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/186315905@N02\/49568157432\/\" title=\"Let Sleeping Dogs Lie\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49568157432_73ba067095_m.jpg\" width=\"240\" height=\"162\" alt=\"Let Sleeping Dogs Lie\" \/><\/a><\/p> ",
            "published": "2020-02-22T05:17:02Z",
            "author": "nobody@flickr.com (\"Robin Loud 64\")",
            "author_id": "186315905@N02",
            "tags": "dog sleepingdog straydog thailand totallythailand d750 nikond750"
          },
          {
            "title": "DSC_6864-1-2",
            "link": "https:\/\/www.flickr.com\/photos\/polkadjango\/49567457303\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567457303_6cd6333a87_m.jpg"
            },
            "date_taken": "2020-02-22T13:38:48-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/polkadjango\/\">Polka &amp; Django<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/polkadjango\/49567457303\/\" title=\"DSC_6864-1-2\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567457303_6cd6333a87_m.jpg\" width=\"240\" height=\"160\" alt=\"DSC_6864-1-2\" \/><\/a><\/p> <p>Nikon Z50, Ai-S Nikkor 28-50mm F3.5<\/p>",
            "published": "2020-02-22T05:10:57Z",
            "author": "nobody@flickr.com (\"Polka & Django\")",
            "author_id": "48668355@N04",
            "tags": "nikonz50 aisnikkor2850mmf35 brittany spaniel dog bw"
          },
          {
            "title": "哈嚕｜柴犬",
            "link": "https:\/\/www.flickr.com\/photos\/songmatin\/49567340918\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567340918_88092ce58b_m.jpg"
            },
            "date_taken": "2020-01-28T22:07:00-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/songmatin\/\">里卡豆<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/songmatin\/49567340918\/\" title=\"哈嚕｜柴犬\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567340918_88092ce58b_m.jpg\" width=\"180\" height=\"240\" alt=\"哈嚕｜柴犬\" \/><\/a><\/p> <p><a href=\"https:\/\/www.facebook.com\/Songmatin\" rel=\"noreferrer nofollow\">FaceBook<\/a>｜<a href=\"http:\/\/songmatin.blogspot.com\/\" rel=\"noreferrer nofollow\">Blogger<\/a> ｜<a href=\"http:\/\/instagram.com\/songmatin\" rel=\"noreferrer nofollow\">Instagram<\/a> ｜<a href=\"https:\/\/500px.com\/songmatin\" rel=\"noreferrer nofollow\">500PX<\/a><br \/> <br \/> You can licence images through <a href=\"http:\/\/www.gettyimages.com\/search\/2\/image?artist=Ricardo's snapshot&amp;family=creative,editorial&amp;excludenudity=false&amp;sort=newest\" rel=\"noreferrer nofollow\">My Getty image<\/a> <br \/> <br \/> All of My Reviews｜心得文：<br \/> <br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/06\/dji-mavic-air-review.html\" rel=\"noreferrer nofollow\">DJI Mavic Air Review<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/02\/pen-x-olympus-pen-f-review.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.1<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/03\/x-olympus-pen-fpen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.2<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/05\/pen-x-olympus-pen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.3<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/12\/lensolympus-mzd-17mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 17mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/11\/lensolympus-mzd-25mm-f12-pro.html\" rel=\"noreferrer nofollow\">Olympus MZD 25mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/11\/lensolympus-mzd-45mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 45mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/06\/lensolympus-mzd-75mm-f18_1.html\" rel=\"noreferrer nofollow\">Olympus MZD 75mm f\/1.8 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/05\/lenspanasonic-leica-dg-summilux-12mm.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 12mm f\/1.4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/06\/lensleica-dg-8-18mmf28-4-vs-lumix-g-7.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 8-18mm f\/2.8-4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/12\/m43.html\" rel=\"noreferrer nofollow\"><br \/> A Five-Year Photographic Journey with the M4\/3 Series. <\/a><\/p>",
            "published": "2020-02-22T04:21:12Z",
            "author": "nobody@flickr.com (\"里卡豆\")",
            "author_id": "43386676@N08",
            "tags": "dog 狗 犬 柴犬"
          },
          {
            "title": "台中｜TAICHUNG",
            "link": "https:\/\/www.flickr.com\/photos\/songmatin\/49568076657\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49568076657_e0e456e846_m.jpg"
            },
            "date_taken": "2020-01-25T19:00:23-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/songmatin\/\">里卡豆<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/songmatin\/49568076657\/\" title=\"台中｜TAICHUNG\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49568076657_e0e456e846_m.jpg\" width=\"240\" height=\"160\" alt=\"台中｜TAICHUNG\" \/><\/a><\/p> <p><a href=\"https:\/\/www.facebook.com\/Songmatin\" rel=\"noreferrer nofollow\">FaceBook<\/a>｜<a href=\"http:\/\/songmatin.blogspot.com\/\" rel=\"noreferrer nofollow\">Blogger<\/a> ｜<a href=\"http:\/\/instagram.com\/songmatin\" rel=\"noreferrer nofollow\">Instagram<\/a> ｜<a href=\"https:\/\/500px.com\/songmatin\" rel=\"noreferrer nofollow\">500PX<\/a><br \/> <br \/> You can licence images through <a href=\"http:\/\/www.gettyimages.com\/search\/2\/image?artist=Ricardo's snapshot&amp;family=creative,editorial&amp;excludenudity=false&amp;sort=newest\" rel=\"noreferrer nofollow\">My Getty image<\/a> <br \/> <br \/> All of My Reviews｜心得文：<br \/> <br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/06\/dji-mavic-air-review.html\" rel=\"noreferrer nofollow\">DJI Mavic Air Review<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/02\/pen-x-olympus-pen-f-review.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.1<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/03\/x-olympus-pen-fpen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.2<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/05\/pen-x-olympus-pen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.3<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/12\/lensolympus-mzd-17mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 17mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/11\/lensolympus-mzd-25mm-f12-pro.html\" rel=\"noreferrer nofollow\">Olympus MZD 25mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/11\/lensolympus-mzd-45mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 45mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/06\/lensolympus-mzd-75mm-f18_1.html\" rel=\"noreferrer nofollow\">Olympus MZD 75mm f\/1.8 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/05\/lenspanasonic-leica-dg-summilux-12mm.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 12mm f\/1.4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/06\/lensleica-dg-8-18mmf28-4-vs-lumix-g-7.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 8-18mm f\/2.8-4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/12\/m43.html\" rel=\"noreferrer nofollow\"><br \/> A Five-Year Photographic Journey with the M4\/3 Series. <\/a><\/p>",
            "published": "2020-02-22T04:25:02Z",
            "author": "nobody@flickr.com (\"里卡豆\")",
            "author_id": "43386676@N08",
            "tags": "dog dogs"
          },
          {
            "title": "哈嚕｜柴犬",
            "link": "https:\/\/www.flickr.com\/photos\/songmatin\/49567340703\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567340703_f5c4e34c0c_m.jpg"
            },
            "date_taken": "2020-01-29T09:41:08-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/songmatin\/\">里卡豆<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/songmatin\/49567340703\/\" title=\"哈嚕｜柴犬\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567340703_f5c4e34c0c_m.jpg\" width=\"160\" height=\"240\" alt=\"哈嚕｜柴犬\" \/><\/a><\/p> <p><a href=\"https:\/\/www.facebook.com\/Songmatin\" rel=\"noreferrer nofollow\">FaceBook<\/a>｜<a href=\"http:\/\/songmatin.blogspot.com\/\" rel=\"noreferrer nofollow\">Blogger<\/a> ｜<a href=\"http:\/\/instagram.com\/songmatin\" rel=\"noreferrer nofollow\">Instagram<\/a> ｜<a href=\"https:\/\/500px.com\/songmatin\" rel=\"noreferrer nofollow\">500PX<\/a><br \/> <br \/> You can licence images through <a href=\"http:\/\/www.gettyimages.com\/search\/2\/image?artist=Ricardo's snapshot&amp;family=creative,editorial&amp;excludenudity=false&amp;sort=newest\" rel=\"noreferrer nofollow\">My Getty image<\/a> <br \/> <br \/> All of My Reviews｜心得文：<br \/> <br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/06\/dji-mavic-air-review.html\" rel=\"noreferrer nofollow\">DJI Mavic Air Review<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/02\/pen-x-olympus-pen-f-review.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.1<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/03\/x-olympus-pen-fpen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.2<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/05\/pen-x-olympus-pen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.3<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/12\/lensolympus-mzd-17mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 17mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/11\/lensolympus-mzd-25mm-f12-pro.html\" rel=\"noreferrer nofollow\">Olympus MZD 25mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/11\/lensolympus-mzd-45mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 45mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/06\/lensolympus-mzd-75mm-f18_1.html\" rel=\"noreferrer nofollow\">Olympus MZD 75mm f\/1.8 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/05\/lenspanasonic-leica-dg-summilux-12mm.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 12mm f\/1.4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/06\/lensleica-dg-8-18mmf28-4-vs-lumix-g-7.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 8-18mm f\/2.8-4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/12\/m43.html\" rel=\"noreferrer nofollow\"><br \/> A Five-Year Photographic Journey with the M4\/3 Series. <\/a><\/p>",
            "published": "2020-02-22T04:21:12Z",
            "author": "nobody@flickr.com (\"里卡豆\")",
            "author_id": "43386676@N08",
            "tags": "dog 狗 犬 柴犬"
          },
          {
            "title": "台中｜TAICHUNG",
            "link": "https:\/\/www.flickr.com\/photos\/songmatin\/49567849121\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567849121_2e33026415_m.jpg"
            },
            "date_taken": "2020-01-25T19:00:43-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/songmatin\/\">里卡豆<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/songmatin\/49567849121\/\" title=\"台中｜TAICHUNG\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567849121_2e33026415_m.jpg\" width=\"240\" height=\"160\" alt=\"台中｜TAICHUNG\" \/><\/a><\/p> <p><a href=\"https:\/\/www.facebook.com\/Songmatin\" rel=\"noreferrer nofollow\">FaceBook<\/a>｜<a href=\"http:\/\/songmatin.blogspot.com\/\" rel=\"noreferrer nofollow\">Blogger<\/a> ｜<a href=\"http:\/\/instagram.com\/songmatin\" rel=\"noreferrer nofollow\">Instagram<\/a> ｜<a href=\"https:\/\/500px.com\/songmatin\" rel=\"noreferrer nofollow\">500PX<\/a><br \/> <br \/> You can licence images through <a href=\"http:\/\/www.gettyimages.com\/search\/2\/image?artist=Ricardo's snapshot&amp;family=creative,editorial&amp;excludenudity=false&amp;sort=newest\" rel=\"noreferrer nofollow\">My Getty image<\/a> <br \/> <br \/> All of My Reviews｜心得文：<br \/> <br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/06\/dji-mavic-air-review.html\" rel=\"noreferrer nofollow\">DJI Mavic Air Review<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/02\/pen-x-olympus-pen-f-review.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.1<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/03\/x-olympus-pen-fpen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.2<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.com\/2018\/05\/pen-x-olympus-pen-f.html\" rel=\"noreferrer nofollow\">Olympus PEN-F Review Part.3<\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/12\/lensolympus-mzd-17mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 17mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/11\/lensolympus-mzd-25mm-f12-pro.html\" rel=\"noreferrer nofollow\">Olympus MZD 25mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/11\/lensolympus-mzd-45mm-f12-pro-review.html\" rel=\"noreferrer nofollow\">Olympus MZD 45mm f\/1.2 PRO Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/06\/lensolympus-mzd-75mm-f18_1.html\" rel=\"noreferrer nofollow\">Olympus MZD 75mm f\/1.8 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/05\/lenspanasonic-leica-dg-summilux-12mm.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 12mm f\/1.4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2017\/06\/lensleica-dg-8-18mmf28-4-vs-lumix-g-7.html\" rel=\"noreferrer nofollow\">Panasonic LEICA DG 8-18mm f\/2.8-4 Review <\/a><br \/> <a href=\"http:\/\/songmatin.blogspot.tw\/2016\/12\/m43.html\" rel=\"noreferrer nofollow\"><br \/> A Five-Year Photographic Journey with the M4\/3 Series. <\/a><\/p>",
            "published": "2020-02-22T04:25:03Z",
            "author": "nobody@flickr.com (\"里卡豆\")",
            "author_id": "43386676@N08",
            "tags": "dog dogs"
          },
          {
            "title": "Nuturing her Young Pups",
            "link": "https:\/\/www.flickr.com\/photos\/sewerdoc\/49567284853\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567284853_8f7a0f4af7_m.jpg"
            },
            "date_taken": "2019-11-10T07:34:01-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/sewerdoc\/\">SewerDoc (4 million views)<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/sewerdoc\/49567284853\/\" title=\"Nuturing her Young Pups\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567284853_8f7a0f4af7_m.jpg\" width=\"240\" height=\"160\" alt=\"Nuturing her Young Pups\" \/><\/a><\/p> <p>While exploring the banks of the Ganges River in Varanasi, India, I happened upon female dam nursing her litter of six adorable puppies, a most delightful sight.<\/p>",
            "published": "2020-02-22T03:54:52Z",
            "author": "nobody@flickr.com (\"SewerDoc (4 million views)\")",
            "author_id": "9242562@N06",
            "tags": "assighat gangesriver india varanasi dog puppy puppies feeding"
          },
          {
            "title": "Dog on Chair",
            "link": "https:\/\/www.flickr.com\/photos\/createdandcapturedbymiriam\/49567740631\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567740631_8f1702b091_m.jpg"
            },
            "date_taken": "2020-02-09T12:25:18-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/createdandcapturedbymiriam\/\">KiwiMiriam<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/createdandcapturedbymiriam\/49567740631\/\" title=\"Dog on Chair\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567740631_8f1702b091_m.jpg\" width=\"240\" height=\"207\" alt=\"Dog on Chair\" \/><\/a><\/p> ",
            "published": "2020-02-22T03:40:06Z",
            "author": "nobody@flickr.com (\"KiwiMiriam\")",
            "author_id": "62668700@N03",
            "tags": "bw dog chair sitting japanesespitz"
          },
          {
            "title": "Timber",
            "link": "https:\/\/www.flickr.com\/photos\/cruzincanines\/49567967232\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567967232_008a57ecdd_m.jpg"
            },
            "date_taken": "2020-02-13T16:04:16-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/cruzincanines\/\">Cruzin Canines Photography<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/cruzincanines\/49567967232\/\" title=\"Timber\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567967232_008a57ecdd_m.jpg\" width=\"160\" height=\"240\" alt=\"Timber\" \/><\/a><\/p> <p>Timber<\/p>",
            "published": "2020-02-22T03:36:56Z",
            "author": "nobody@flickr.com (\"Cruzin Canines Photography\")",
            "author_id": "50109591@N06",
            "tags": "animal animals canine dog dogs pet pets portrait husky huskies alaskanhusky siberianhusky timber outdoors outside nature hartpark bakersfield califorina"
          },
          {
            "title": "Gimmie a kiss",
            "link": "https:\/\/www.flickr.com\/photos\/186910618@N07\/49567604676\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567604676_ec4877957a_m.jpg"
            },
            "date_taken": "2020-02-18T05:17:41-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/186910618@N07\/\">BlackhatTaylor<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/186910618@N07\/49567604676\/\" title=\"Gimmie a kiss\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567604676_ec4877957a_m.jpg\" width=\"240\" height=\"160\" alt=\"Gimmie a kiss\" \/><\/a><\/p> ",
            "published": "2020-02-22T02:52:23Z",
            "author": "nobody@flickr.com (\"BlackhatTaylor\")",
            "author_id": "186910618@N07",
            "tags": "puppy dog dogo kiss furyfriend"
          },
          {
            "title": "Milou",
            "link": "https:\/\/www.flickr.com\/photos\/aroshandel\/49567451141\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567451141_c3e163c4b0_m.jpg"
            },
            "date_taken": "2019-10-30T09:56:30-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/aroshandel\/\">aroshandel<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/aroshandel\/49567451141\/\" title=\"Milou\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567451141_c3e163c4b0_m.jpg\" width=\"240\" height=\"160\" alt=\"Milou\" \/><\/a><\/p> ",
            "published": "2020-02-22T01:45:38Z",
            "author": "nobody@flickr.com (\"aroshandel\")",
            "author_id": "122586534@N04",
            "tags": "canondeutschland canon sunny passion pet photography dogphotography dog"
          },
          {
            "title": "Princess1",
            "link": "https:\/\/www.flickr.com\/photos\/187105126@N04\/49566948303\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49566948303_15e69b52ef_m.jpg"
            },
            "date_taken": "2020-02-21T17:44:41-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/187105126@N04\/\">edvskkzk67<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/187105126@N04\/49566948303\/\" title=\"Princess1\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49566948303_15e69b52ef_m.jpg\" width=\"240\" height=\"186\" alt=\"Princess1\" \/><\/a><\/p> <p>My first wolf dog<\/p>",
            "published": "2020-02-22T01:45:21Z",
            "author": "nobody@flickr.com (\"edvskkzk67\")",
            "author_id": "187105126@N04",
            "tags": "wolf dog"
          },
          {
            "title": "Python enjoying a nap",
            "link": "https:\/\/www.flickr.com\/photos\/churrumburru\/49567583937\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567583937_f577a09c9b_m.jpg"
            },
            "date_taken": "2020-02-15T14:29:02-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/churrumburru\/\">Churrumburru<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/churrumburru\/49567583937\/\" title=\"Python enjoying a nap\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567583937_f577a09c9b_m.jpg\" width=\"240\" height=\"240\" alt=\"Python enjoying a nap\" \/><\/a><\/p> <p><\/p>",
            "published": "2020-02-22T01:05:26Z",
            "author": "nobody@flickr.com (\"Churrumburru\")",
            "author_id": "94152251@N00",
            "tags": "dog sleeping sunny siesta outofframe light luz animal perro pet mascota window shadow calm"
          },
          {
            "title": "JaxImage1",
            "link": "https:\/\/www.flickr.com\/photos\/187105126@N04\/49567584112\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567584112_3638778a01_m.jpg"
            },
            "date_taken": "2015-06-20T12:18:17-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/187105126@N04\/\">edvskkzk67<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/187105126@N04\/49567584112\/\" title=\"JaxImage1\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567584112_3638778a01_m.jpg\" width=\"240\" height=\"240\" alt=\"JaxImage1\" \/><\/a><\/p> <p>My Samoyed<\/p>",
            "published": "2020-02-22T01:03:46Z",
            "author": "nobody@flickr.com (\"edvskkzk67\")",
            "author_id": "187105126@N04",
            "tags": "dog pet jax"
          },
          {
            "title": "Yogi '20",
            "link": "https:\/\/www.flickr.com\/photos\/carolinarob7\/49567516522\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567516522_831ccd2ecf_m.jpg"
            },
            "date_taken": "2020-02-21T11:13:32-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/carolinarob7\/\">R24KBerg Photos<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/carolinarob7\/49567516522\/\" title=\"Yogi '20\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567516522_831ccd2ecf_m.jpg\" width=\"240\" height=\"160\" alt=\"Yogi '20\" \/><\/a><\/p> ",
            "published": "2020-02-22T00:37:06Z",
            "author": "nobody@flickr.com (\"R24KBerg Photos\")",
            "author_id": "22307032@N00",
            "tags": "yogi dog goldenretriever cute sweet pet animal canon snow 2020 wintervillenc friend winter cold snowfall playing playful"
          },
          {
            "title": "Yogi '20",
            "link": "https:\/\/www.flickr.com\/photos\/carolinarob7\/49567516262\/",
            "media": {
              "m": "https:\/\/live.staticflickr.com\/65535\/49567516262_e2605c44a1_m.jpg"
            },
            "date_taken": "2020-02-21T11:14:20-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/carolinarob7\/\">R24KBerg Photos<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/carolinarob7\/49567516262\/\" title=\"Yogi '20\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49567516262_e2605c44a1_m.jpg\" width=\"240\" height=\"160\" alt=\"Yogi '20\" \/><\/a><\/p> ",
            "published": "2020-02-22T00:37:07Z",
            "author": "nobody@flickr.com (\"R24KBerg Photos\")",
            "author_id": "22307032@N00",
            "tags": "yogi dog goldenretriever cute sweet pet animal canon snow 2020 wintervillenc friend winter cold snowfall playing playful"
          }
        ]
      };

      dispatch(receiveImages(response.items))
    } else {
      dispatch(receiveImages([]));
    }
  }
}
