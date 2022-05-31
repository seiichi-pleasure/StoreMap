declare namespace Iemeshi {
  type ShopData = {
    index: number;
    distance?: number;
    'タイムスタンプ': string;
    '緯度': string;
    '経度': string;
    'スポット名': string;
    'カテゴリ': string;
    '紹介文': string;
    'BCOM': string;
    '都道府県': string;
    '画像': string;
    'URL': string;
    'Instagram': string;
    'Twitter': string;
    '公式サイト': string
  }

  type LngLat = [number, number]
}
