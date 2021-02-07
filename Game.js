import React from 'react';
import {Text, View, Alert} from 'react-native';

import SwipeCards from './SwipeCards.js';
import CountDown from './CountDown';

import styles from './Stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import {AdMobBanner} from 'expo-ads-admob';
import { LinearGradient } from 'expo-linear-gradient';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {text: "At", bannedWords: ["ahir", "esek", "araba", "nal", "binmek"]},
                {text: "Araba", bannedWords: ["tekerlek", "otomobil", "kamyon", "otobus"]},
                {text: "Atac", bannedWords: ["kagit", "kirtasiye", "tutturmak", "zimba", "igne"]},
                {text: "FİİL", bannedWords: ["İş", "Oluş", "Hareket", "Eylem", "Sözcük"]},
                {text: "KUŞBAKIŞI", bannedWords: ["Harita", "Tepe", "Yukarı", "Görmek", "Kroki"]},
                {text: "OKKA", bannedWords: ["Ağırlık", "Ölçü", "Birim", "Kilo", "Tartı"]},
                {text: "KÖK", bannedWords: ["Sözcük", "Ek", "Yapım", "Çekim", "Kelime"]},
                {text: "SÖZLÜK", bannedWords: ["Anlam", "Kelime", "Sözcük", "Açıklama", "Lügat"]},
                {text: "UYAK", bannedWords: ["Şiir", "Dize", "Benzerlik", "Kafiye", "Ses"]},
                {text: "ÖYKÜ", bannedWords: ["Hikâye", "Kahraman", "Yazar", "Yer", "Kitap"]},
                {text: "FABL", bannedWords: ["Hayvan", "La Fontaıne", "Masal", "İnsan", "Hikâye"]},
                {text: "ŞİİR", bannedWords: ["Şair", "Mısra", "Dize", "Kıta", "Dörtlük"]},
                {text: "HAL EKİ", bannedWords: ["Çekim eki", "-i hali", "-de hali", "-den hali", "-e hali"]},
                {text: "EŞ SESLİ", bannedWords: ["Yazılış", "Okunuş", "Aynı", "Sözcük", "Sesteş"]},
                {text: "ZIT ANLAM", bannedWords: ["Karşıt", "Sözcük", "Örnek", "Birbirine", "Mana"]},
                {text: "MECAZ", bannedWords: ["Kelime", "Sözcük", "Gerçek Anlam", "Yan Anlam", "Terim Anlam"]},
                {text: "FİİLİMSİ", bannedWords: ["Sıfat fiil", "İsim fiil", "Zarf fiil", "Fiil", "Ek"]},
                {text: "YAPIM EKİ", bannedWords: ["Ek", "Kelime", "Kök", "Türemiş", "Yapı"]},
                {text: "MASAL", bannedWords: ["Olağanüstü", "Kahraman", "Yazar", "Keloğlan", "Kitap"]},
                {text: "BENZEŞME", bannedWords: ["Sert", "Ünsüz", "Fıstıkçı Şahap", "GeCıD", "Kural"]},
                {text: "ÖZNE", bannedWords: ["Cümle", "İş", "Kişi", "Varlık", "Öge"]},
                {text: "TÜREMİŞ", bannedWords: ["Sözcük", "Kelime", "Yapım Eki", "Çekim Eki", "Yapı"]},
                {text: "KONUŞTURMA", bannedWords: ["İntak", "Hayvan", "Cansız", "Varlık", "Sanat"]},
                {text: "ÖNERİ", bannedWords: ["Teklif", "Çözüm", "Yol", "Cümle", "İyi Olur"]},
                {text: "MECAZ", bannedWords: ["Kelime", "Sözcük", "Gerçek Anlam", "Yan Anlam", "Terim Anlam"]},
                {text: "FAY", bannedWords: ["Hat", "Deprem", "Kırılmak", "Sarsılmak", "İstanbul"]},
                {text: "VARSAYIM", bannedWords: ["Olmamış", "Tut ki", "Farz et", "Diyelim", "Cümle"]},
                {text: "İKİLEM", bannedWords: ["Kararsız", "Cümle", "Durum", "Acaba", "Tercih"]},
                {text: "KÜÇÜMSEME", bannedWords: ["Nitelik", "Değersiz", "Yargı", "Cümle", "Azımsama"]},
                {text: "PARAGRAF", bannedWords: ["Sınav", "Soru", "Ana düşünce", "Yardımcı düşünce", "Metin"]},
                {text: "KOŞUL", bannedWords: ["Şart", "Neden", "Cümle", "Eğer", "Sonuç"]},
                {text: "BENZETME", bannedWords: ["Benzeyen", "Benzetilen", "Gibi", "Güçlü", "Güçsüz"]},
                {text: "ABARTMA", bannedWords: ["Mübalağa", "Aşırı", "Farklı", "Göstermek", "Olduğundan"]},
                {text: "ANLAM KAYMASI", bannedWords: ["Fiil", "Kip", "Zaman", "Anlam", "Eylem"]},
                {text: "ANLATIM BİÇİMİ", bannedWords: ["Betimleme", "Öyküleme", "Tartışmacı", "Açıklayıcı", "Paragraf"]},
                {text: "HAYIFLANMA", bannedWords: ["Pişmanlık", "Üzüntü", "Geçmiş", "Cümle", "Anlam"]},
                {text: "ÜÇ NOKTA", bannedWords: ["Noktalama", "Son", "Tamamlanmamış", "İstenmeyen", "Cümle"]},
                {text: "ÖDEV", bannedWords: ["Ders", "Çalışmak", "Okul", "Öğretmen", "Ev"]},
                {text: "OLASILIK", bannedWords: ["Cümle", "Anlam", "İhtimal", "Belki", "Olabilir"]},
                {text: "SOYUT", bannedWords: ["Duyu", "Algılamak", "Görülmeyen", "İsim", "Somut"]},
                {text: "SOMUT", bannedWords: ["Duyu", "Algılamak", "Soyut", "İsim", "Görülen"]},
                {text: "NOKTA", bannedWords: ["Cümle", "Son", "İşaret", "Tarih", "Saat"]},
                {text: "ZAMİR", bannedWords: ["İsim", "İşaret", "Kişi", "Adıl", "Kelime"]},
                {text: "SIFAT", bannedWords: ["Ön ad", "Niteleme", "İsim", "Zamir", "İşaret"]},
                {text: "KİP", bannedWords: ["Dilek", "Fiil", "Haber", "Bildirme", "Yüklem"]},
                {text: "EK FİİL", bannedWords: ["Eylem", "İsim", "Birleşik", "Şart", "Yüklem"]},
                {text: "ZARF", bannedWords: ["Belirteç", "Zaman", "Yer-Yön", "Durum", "Zaman"]},
                {text: "AŞAMALILIK", bannedWords: ["Giderek", "Gittikçe", "Kademe", "Cümle", "Anlam"]},
                {text: "AHESTE", bannedWords: ["Yavaş", "Ağır", "Hızlı", "Durgun", "Tembel"]},
                {text: "HECE", bannedWords: ["Kelime", "Harf", "Ses", "Okumak", "Yazı"]},
                {text: "KÜSMEK", bannedWords: ["Darılmak", "Kızmak", "Konuşmak", "Tartışmak", "Kavga"]},
                {text: "KARŞILAŞTIRMA", bannedWords: ["Kıyaslama", "Mukayese", "Benzerlik", "Farklılık", "İki"]},
                {text: "TERİM", bannedWords: ["Kelime", "Anlam", "Bilim", "Sanat", "Kavram"]},
                {text: "KOORDİNAT", bannedWords: ["Yer", "Enlem", "Boylam", "Belirtmek", "Vermek"]},
                {text: "AVİZE", bannedWords: ["Lamba", "Kristal", "Tavan", "Işık", "Aydınlık"]},
                {text: "KURNA", bannedWords: ["Hamam", "Yıkanmak", "Su", "Tellak", "Göbek Taşı"]},
                {text: "BASKÜL", bannedWords: ["Tartı", "Kilo", "Ağır", "Ölçü", "Hafif"]},
                {text: "CEMRE", bannedWords: ["Düşmek", "Hava", "Toprak", "Su", "Bahar"]},
                {text: "HALÜSİNASYON", bannedWords: ["Hayal", "Gerçek", "Görmek", "İllüzyon", "Serap"]},
                {text: "ŞAMDAN", bannedWords: ["Mum", "Işık", "Aydınlık", "Yakmak", "Süs"]},
                {text: "ÇAYLAK", bannedWords: ["Acemi", "Deneyim", "Tecrübe", "Usta", "Yeni"]},
                {text: "HARABE", bannedWords: ["Yıkık", "Eski", "Tarihi", "Efes", "Gezmek"]},
                {text: "NİHALE", bannedWords: ["Altlık", "Tencere", "Çaydanlık", "Sıcak", "Tezgâh"]},
                {text: "KORNİŞ", bannedWords: ["Tavan", "Perde", "Asmak", "Pencere", "Cam"]},
                {text: "TIRABZAN", bannedWords: ["Merdiven", "Korkuluk", "İnmek", "Çıkmak", "Bina"]},
                {text: "DUY", bannedWords: ["Tavan", "Lamba", "Işık", "İşitmek", "Anahtar"]},
                {text: "PİŞMANLIK", bannedWords: ["Hata", "Üzülmek", "Yanlış", "Keşke", "Son"]},
                {text: "KUMBARA", bannedWords: ["Para", "Biriktirmek", "Yatırım", "Banka", "Saklamak"]},
                {text: "ANTİKA", bannedWords: ["Müzayede", "Zengin", "Eski", "Tablo", "Tarihi"]},
                {text: "KABZIMAL", bannedWords: ["Meyve", "Sebze", "Hal", "Satmak", "Aracı"]},
                {text: "ARMAĞAN", bannedWords: ["Hediye", "Vermek", "Almak", "Doğum günü", "Sevindirmek"]},
                {text: "SATRANÇ", bannedWords: ["Şah-Mat", "Kale", "Vezir", "Piyon", "Fil"]},
                {text: "ADEM ELMASI", bannedWords: ["Erkek", "Gırtlak", "Çıkıntı", "Boğaz", "Havva"]},
                {text: "SAĞDIÇ", bannedWords: ["Damat", "Düğün", "Gelin", "Güvey", "Sırtına vurmak"]},
                {text: "MANGALA", bannedWords: ["Oyun", "Osmanlı", "Kuyu", "Taş", "Hazine"]},
                {text: "FERMUAR", bannedWords: ["Pantolon", "Mont", "Giysi", "Kıyafet", "Kot"]},
                {text: "KELEBEK", bannedWords: ["Renkli", "Uçmak", "Tırtıl", "Koza", "Hayvan"]},
                {text: "GÖKKUŞAĞI", bannedWords: ["Renkli", "Hava", "Güneş", "Yağmur", "Ebem"]},
                {text: "BALMUMU", bannedWords: ["Mum", "Erimek", "Heykel", "Müze", "Bal"]},
                {text: "PARAŞÜT", bannedWords: ["Uçak", "Atlamak", "Uçmak", "Balon", "Hava"]},
                {text: "BAĞLAMA", bannedWords: ["Türkü", "Müzik", "Saz", "Tel", "Akort"]},
                {text: "TİYATRO", bannedWords: ["Oyuncu", "Sahne", "Perde", "Oyun", "Suflör"]},
                {text: "MALA", bannedWords: ["İnşaat", "Duvar", "Usta", "Sıva", "Çimento"]},
                {text: "DOST", bannedWords: ["Güven", "Samimi", "Dürüst", "Arkadaş", "Ahlaklı"]},
                {text: "KEDİ", bannedWords: ["Pati", "Fare", "Tüy", "Kuyruk", "Hayvan"]},
                {text: "ANAHTAR", bannedWords: ["Kilit", "Metal", "Kasa", "Kapı", "Çilingir"]},
                {text: "EMPATİ", bannedWords: ["Kendini", "Başkası", "Yerine", "Koyma", "Düşünme"]},
                {text: "KAPAN", bannedWords: ["Av", "Kurt", "Hayvan", "Tuzak", "Fare"]},
                {text: "DERGİ", bannedWords: ["Gazete", "Mecmua", "Makale", "Yazı", "Kapak"]},
                {text: "ÖZÇEKİM", bannedWords: ["Selfie", "Telefon", "Kendi", "Fotoğraf", "Poz"]},
                {text: "KİŞİLEŞTİRME", bannedWords: ["İnsan", "Fabl", "Hayvan", "Varlık", "Konuşturma"]},
                {text: "HOŞGÖRÜ", bannedWords: ["Mevlana", "Anlayış", "Empati", "Ne olursan", "Gel"]},
                {text: "ULEMA", bannedWords: ["Bilgin", "Osmanlı", "Din", "Alim", "Hoca"]},
                {text: "ÇIRA", bannedWords: ["Ateş", "Yakmak", "Odun", "Tahta", "Çay"]},
                {text: "MANİ", bannedWords: ["Kısa", "Şiir", "Edebiyat", "Sakız", "Engel"]},
                {text: "FİDAN", bannedWords: ["Ağaç", "Büyümek", "Küçük", "Orman", "Dikmek"]},
                {text: "HEYBETLİ", bannedWords: ["Yüce", "Dağ", "Büyük", "Yüksek", "İri"]},
                {text: "BONKÖR", bannedWords: ["Eli Açık", "Cömert", "Para", "Gönlü Zengin", "Harcamak"]},
                {text: "MİSKİN", bannedWords: ["Tembel", "Uyuşuk", "Yavaş", "Ağır", "Kedi"]},
                {text: "KIVILCIM", bannedWords: ["Ateş", "Kibrit", "Çakmak", "Taş", "Sürtmek"]},
                {text: "PRATİK", bannedWords: ["Kolay", "Zekâ", "Çabuk", "Hızlı", "Çözüm"]},
                {text: "MESAİ", bannedWords: ["Saat", "İş", "Fazla", "Akşam", "Kalmak"]},
                {text: "YAYIK", bannedWords: ["Ayran", "Su", "Yoğurt", "Çalkalamak", "Süt"]},
                {text: "AKROSTİŞ", bannedWords: ["Şiir", "Mısra", "İsim", "İlk", "Kıta"]},
                {text: "BAMBU", bannedWords: ["Sazlık", "Mobilya", "Ağaç", "Masa", "Sandalye"]},
                {text: "KÖHNE", bannedWords: ["Eski", "Tarihi", "Yıkılmak", "Bina", "Harabe"]},
                {text: "KÜREMEK", bannedWords: ["Kar", "Ev", "Yol", "Buz", "Kış"]},
                {text: "GÖÇMEN", bannedWords: ["Mülteci", "Vize", "Soğuk", "Kuş", "Sıcak"]},
                {text: "YELPAZE", bannedWords: ["Sıcak", "Rüzgâr", "Yaz", "Kadın", "Sallamak"]},
                {text: "YABANİ", bannedWords: ["Vahşi", "İlkel", "Hayat", "Orman", "Hayvan"]},
                {text: "ÇUVAL", bannedWords: ["Torba", "Doldurmak", "Yem", "Un", "Koymak"]},
                {text: "FLAMA", bannedWords: ["Bayrak", "Üçgen", "Okul", "İzci", "Tören"]},
                {text: "MÜSVEDDE", bannedWords: ["Karalama", "Not Almak", "Yazmak", "Kâğıt", "Temiz"]},
                {text: "AJANDA", bannedWords: ["Defter", "İş", "Yazmak", "Gün", "Toplantı"]},
                {text: "SİFTAH", bannedWords: ["İlk", "Gün", "Satmak", "Mal", "Alışveriş"]},
                {text: "TALİMAT", bannedWords: ["Emir", "Vermek", "Fatura", "Banka", "Otomatik Ödeme"]},
                {text: "UYANIK", bannedWords: ["Akıllı", "Zeki", "Açıkgöz", "Kurnaz", "Saf"]},
                {text: "İHALE", bannedWords: ["Belediye", "Girmek", "Açmak", "Yolsuzluk", "Kazanmak"]},
                {text: "İŞTAH", bannedWords: ["Acıkmak", "Kesilmek", "Açmak", "Lezzet", "Yemek"]},
                {text: "PASAKLI", bannedWords: ["Temiz", "Titiz", "Kirli", "Düzenli", "Karışık"]},
                {text: "FİRAR", bannedWords: ["Kaçak", "Hapis", "Asker", "Mahkûm", "Etmek"]},
                {text: "PLAKET", bannedWords: ["Ödül", "Tören", "Başarı", "Vermek", "Teşekkür"]},
                {text: "FULAR", bannedWords: ["Eşarp", "Bağlamak", "Baş", "Boyun", "Kadın"]},
                {text: "HALAY", bannedWords: ["Düğün", "Çekmek", "Oynamak", "Mendil", "Kol"]},
                {text: "HİLE", bannedWords: ["Aldatmak", "Kandırmak", "Oyun", "Yapmak", "Kumar"]},
                {text: "STAJ", bannedWords: ["Öğrenci", "Çalışmak", "Üniversite", "Tecrübe", "İş"]},
                {text: "SIRIK", bannedWords: ["Uzun", "Atlamak", "Boy", "Atletizm", "Fasulye"]},
                {text: "KAOS", bannedWords: ["Karışıklık", "Ortam", "Kargaşa", "Düzen", "Yaratmak"]},
                {text: "ARIZA", bannedWords: ["Bozuk", "Tamir", "Çalışmak", "Telefon", "Elektrik"]},
                {text: "SUİSTİMAL", bannedWords: ["İyi", "Niyet", "Kullanmak", "Faydalanmak", "Kötü"]},
                {text: "SISKA", bannedWords: ["Zayıf", "İnce", "Çelimsiz", "Şişman", "Hasta"]},
                {text: "YADİGAR", bannedWords: ["Aile", "Hatıra", "Değerli", "Miras", "Bırakmak"]},
                {text: "MACUN", bannedWords: ["Cam", "Pencere", "Tutmak", "Kenar", "Mesir"]},
                {text: "TECRÜBE", bannedWords: ["İş", "Kazanmak", "Çalışmak", "Deneyim", "Yıl"]},
                {text: "NADİR", bannedWords: ["Zor", "Az", "Bulmak", "Sık", "Çok"]},
                {text: "MIZIKÇI", bannedWords: ["Çocuk", "Küsmek", "Darılmak", "Bozmak", "Oyun"]},
                {text: "ESİR", bannedWords: ["Mahkûm", "Savaş", "Düşmek", "Tutsak", "Kamp"]},
                {text: "ÇAVDAR", bannedWords: ["Arpa", "Tahıl", "Buğday", "Kepek", "Ekmek"]},
                {text: "VERESİYE", bannedWords: ["Peşin", "Borç", "Satın Almak", "Ödemek", "Defter"]},
                {text: "ABLUKA", bannedWords: ["Etraf", "Kuşatma", "Savaş", "Çevirmek", "Düşman"]},
                {text: "UCUZLUK", bannedWords: ["İndirim", "Pahalı", "Yüzde", "Fiyat", "Vitrin"]},
                {text: "PATİKA", bannedWords: ["Keçi Yolu", "Orman", "Kestirme", "Yürümek", "Dağ"]},
                {text: "BUĞU", bannedWords: ["Buhar", "Cam", "Su", "Sıcak", "Araba"]},
                {text: "PARANOYA", bannedWords: ["Şüphe", "Akıl", "Ruh", "Hastalık", "Deli"]},
                {text: "GÜZERGÂH", bannedWords: ["Yol", "Araba", "Rota", "Servis", "Takip Etmek"]},
                {text: "PERFORMANS", bannedWords: ["Değerlendirme", "Başarı", "Ders", "Ödev", "Yüksek"]},
                {text: "FESHETMEK", bannedWords: ["Antlaşma", "Sözleşme", "İptal", "Geçersiz", "Bozmak"]},
                {text: "MONOTON", bannedWords: ["Aynı", "Sıkıcı", "Sıradan", "Benzer", "Rutin"]},
                {text: "BOŞBOĞAZ", bannedWords: ["Konuşmak", "Geveze", "Sır", "Söylemek", "Anlatmak"]},
                {text: "DİYAR", bannedWords: ["Memleket", "Vatan", "Dolaşmak", "Gezmek", "Âşık Veysel"]},
                {text: "YADIRGAMAK", bannedWords: ["Garip", "Tuhaf", "Kabullenmek", "Şaşırmak", "Davranış"]},
                {text: "ZEYBEK", bannedWords: ["Atatürk", "Oyun", "Ege", "Efe", "Sarı"]},
                {text: "KABİN", bannedWords: ["Giyinmek", "Duş", "Denemek", "Mağaza", "Kıyafet"]},
                {text: "PORSİYON", bannedWords: ["Yemek", "Tabak", "Lokanta", "Yarım", "Restoran"]},
                {text: "DOZ", bannedWords: ["Miktar", "İlaç", "Doktor", "Reçete", "Aşırı"]},
                {text: "SERVET", bannedWords: ["Kazanmak", "Zenginlik", "Mal", "Mülk", "Para"]},
                {text: "EREZYON", bannedWords: ["Toprak", "Kayma", "Ağaç", "Heyelan", "TEMA"]},
                {text: "ÇAMAŞIR", bannedWords: ["Kirli", "Yıkamak", "Makine", "Deterjan", "Giymek"]},
                {text: "NUMUNE", bannedWords: ["Örnek", "Vermek", "Tahlil", "Yemek", "Küçük"]},
                {text: "TABURE", bannedWords: ["Oturmak", "Sandalye", "Koltuk", "Yemekhane", "Sırt"]},
                {text: "TEDARİK", bannedWords: ["Bulmak", "Sağlamak", "Malzeme", "Etmek", "Hazırlık"]},
                {text: "MİÇO", bannedWords: ["Tayfa", "Gemi", "Kaptan", "Deniz", "Yardımcı"]},
                {text: "KASVET", bannedWords: ["Sıkıntı", "Gam", "Karanlık", "Aydınlık", "Neşeli"]},
                {text: "VİRAN", bannedWords: ["Eski", "Yıkık", "Harap", "Ev", "Köhne"]},
                {text: "ESKİMO", bannedWords: ["Kutup", "Buzul", "Kar", "Soğuk", "Balık"]},
                {text: "ÇADIR", bannedWords: ["Kamp", "Uyku Tulumu", "Kurmak", "Doğa", "Tatil"]},
                {text: "NADAS", bannedWords: ["Tarla", "Ekmek", "Bırakmak", "Dinlendirmek", "Çiftçi"]},
                {text: "HASIR", bannedWords: ["Sepet", "Şapka", "Plaj", "Deniz", "Sermek"]},
                {text: "GADDAR", bannedWords: ["Acımasız", "Sert", "Katı", "Merhamet", "İnsaf"]},
                {text: "HAMAK", bannedWords: ["Yatmak", "Ağaç", "Sallanmak", "Kurmak", "Piknik"]},
                {text: "TAKUNYA", bannedWords: ["Tahta", "Terlik", "Ayakkabı", "Giymek", "Hamam"]},
                {text: "KONVOY", bannedWords: ["Araba", "Gitmek", "Dizilmek", "Arka", "Düğün"]},
                {text: "BUKELAMUN", bannedWords: ["Hayvan", "Renk", "Kertenkele", "Değişmek", "Sürüngen"]},
                {text: "AKSİ", bannedWords: ["Sinirli", "Ters", "Zıt", "Asabi", "Huysuz"]},
                {text: "CEPHE", bannedWords: ["Savaş", "Ordu", "Asker", "Saldırmak", "Barış"]},
                {text: "ÇEVİK", bannedWords: ["Kuvvet", "Polis", "Asker", "Güç", "Hızlı"]},
                {text: "YAMAÇ", bannedWords: ["Uçurum", "Yüksek", "Dağ", "Dik", "Paraşüt"]},
                {text: "OLUK", bannedWords: ["Akmak", "Su", "Yağmur", "Saçak", "Boru"]},
                {text: "VEZNE", bannedWords: ["Banka", "Para", "Ödeme", "Almak", "Muhasebe"]},
                {text: "PROSPEKTÜS", bannedWords: ["İlaç", "Eczane", "Okumak", "İçindekiler", "Kullanmak"]},
                {text: "ZİRAAT", bannedWords: ["Tarım", "Çiftçi", "Toprak", "Hayvan", "Banka"]},
                {text: "PİL", bannedWords: ["Kalem", "İnce", "Kumanda", "El Feneri", "Fen"]},
            ],
            teamFirstScore: 0,
            teamSecondScore: 0,
            teamFirstPass: 3,
            teamSecondPass: 3,
            seconds: this.props.seconds,
            playerTeam: this.props.teamFirst,
            limitScore: this.props.limitScore,
            scoreBonus: this.props.scoreBonus,
            isPaused: false,
            teamFirstWords: {
                yup: [],
                nope: [],
                maybe: []
            },
            teamSecondWords: {
                yup: [],
                nope: [],
                maybe: []
            }
        }
        this.shuffle();
    }


    handleYup = (card) =>{
        let activeCard = this.state.cards[0];

        if(this.state.isPaused){
            return
        }
        
        let currentScore = 0;

        let cardsList = this.shuffleList(this.state.cards);
        let newList = [];

        for(let i = cardsList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            newList.push(cardsList[i]);
        }

        this.setState({cards: newList});
        if(this.state.playerTeam == this.props.teamFirst){
            this.setState({teamFirstScore: this.state.teamFirstScore + 1});  
            currentScore = this.state.teamFirstScore+1;
        }else{
            this.setState({teamSecondScore: this.state.teamSecondScore + 1});
            currentScore = this.state.teamSecondScore+1;
        }
        if(this.state.limitScore <= currentScore){
            this.setState({isPaused: true});
            this.props.navigation.replace("GameEnd", {
                winnerName: this.state.playerTeam,
                teamFirst: this.props.teamFirst,
                teamSecond: this.props.teamSecond,
                teamFirstScore: this.state.teamFirstScore+1,
                teamSecondScore: this.state.teamSecondScore+1,
                teamFirstPass: this.state.teamFirstPass,
                teamSecondPass: this.state.teamSecondPass
            });
        }
    }

    handleNope = (card) =>{

        if(this.state.isPaused){
            return
        }
        
        let endScore = 0;
        if(this.state.scoreBonus){
            endScore = -5;
        }

        if(this.state.playerTeam == this.props.teamFirst){
            if(this.state.teamFirstScore <= endScore){
                return
            }
            this.setState({teamFirstScore: this.state.teamFirstScore - 1})
        }else{
            if(this.state.teamSecondScore <= endScore){
                return
            }
            this.setState({teamSecondScore: this.state.teamSecondScore - 1})
        }

        let cardsList = this.shuffleList(this.state.cards);
        let newList = [];

        for(let i = cardsList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            newList.push(cardsList[i]);
        }

        this.setState({cards: newList});
    }

    handleMaybe = (card) =>{

        if(this.state.isPaused){
            return
        }

        if(this.state.playerTeam == this.props.teamFirst){
            if(this.state.teamFirstPass <= 0){
                return
            }
            this.setState({teamFirstPass: this.state.teamFirstPass - 1});
        }else{
            if(this.state.teamSecondPass <= 0){
                return
            }
            this.setState({teamSecondPass: this.state.teamSecondPass - 1});
        }


        let cardsList = this.shuffleList(this.state.cards);
        let newList = [];

        for(let i = cardsList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            newList.push(cardsList[i]);
        }

        this.setState({cards: newList});
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //if (nextProps.isPaused !== prevState.isPaused) {
        //  return ({ isPaused: nextProps.isPaused }) // <- this is setState equivalent
        //}
        return null
      }
    

    timeEnd = (cdProp) => {
        this.setState({seconds: this.props.seconds});
        if(this.state.playerTeam == this.props.teamFirst){
            this.setState({playerTeam: this.props.teamSecond})
        }else{
            this.setState({playerTeam: this.props.teamFirst})
        }
        if(this.state.isPaused){
            return null;
        }else{
            cdProp.setState({isPaused: true});
            Alert.alert(
                `${this.state.playerTeam} oyuna başlayacak.`,
                'hazır oldugunuzda okey babus verin',
                [
                  {text: 'Okey babus', onPress: () => {
                      this.shuffle();
                      cdProp.setState({seconds: this.state.seconds});
                      cdProp.timer = 0;
                      cdProp.setState({isPaused: false});
                      cdProp.startTimer();
                    }}
                ],
                { cancelable: false }
              )
        } 
    }

    shuffle() {
        let arr = this.state.cards;
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        this.setState({cards: arr});
    };

    shuffleList = (arr) => {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    maybeActive(){
        if(this.passRight() > 0){
            return true;
        }
        return false;
    }

    passRight(){
        if(this.state.playerTeam == this.props.teamFirst){
            return this.state.teamFirstPass;
        }else{
            return this.state.teamSecondPass;
        }
    }

    componentWillUnmount(){
        this.setState({isPaused: true});
    }

    togglePause = () => {
        this.setState({isPaused: !this.state.isPaused});
        console.log("gamedeki "+!this.state.isPaused);
    }

    cards(){
        return this.shuffleList(this.state.cards);
    }

    bannerError() {
        console.log("An error");
        return;
      }

    render(){
        let score = 0;
        if(this.state.playerTeam == this.props.teamFirst){
            score = this.state.teamFirstScore;
        }else{
            score = this.state.teamSecondScore;
        }
        let maybeActive = this.maybeActive();

        return (
            <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                <View style={styles.gameHeaderBox}>
                    <View style={styles.scoreBoardContainer}>
                            <Text style={styles.scoreBoardText}>
                                {this.state.teamFirstScore}
                            </Text>
                            <View style={styles.scoreBoardBorder}></View>
                            <Text style={styles.scoreBoardText}>
                                {this.state.teamFirstPass}
                            </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.playerText}>
                            {this.state.playerTeam} Oynuyor
                        </Text>
                    </View>
                    <View style={styles.scoreBoardContainer}>
                        <Text style={styles.scoreBoardText}>
                            {this.state.teamSecondScore}
                        </Text>
                        <View style={styles.scoreBoardBorder}></View>
                        <Text style={styles.scoreBoardText}>
                            {this.state.teamSecondPass}
                        </Text>
                    </View>

                </View>

                <View style={styles.countDown}>
                        <CountDown 
                        seconds={this.state.seconds} 
                        timeEnd={this.timeEnd} 
                        isPaused={this.state.isPaused}
                        togglePause={this.togglePause}
                        
                        />
                    </View>

                <View style={styles.swipeCardContainer}>
                    <SwipeCards 
                        cards={this.cards()}
                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                        handleMaybe={this.handleMaybe}
                        maybeActive={maybeActive}
                        onLoop={this.shuffle}
                        touchable={this.state.isPaused}
                    />
                    <View style={styles.cardBottom}>
                    <LinearGradient style={styles.nopeButton} colors={['#FF4B2B', '#FF416C']}>
                        <TouchableOpacity onPress={this.handleNope}>
                            <Text style={styles.choiceButtonText}>
                                <Entypo name="thumbs-down" size={24} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient style={styles.maybeButton} colors={['#667db6', '#0082c8', '#667db6']}>
                        <TouchableOpacity style={styles.maybeButton} onPress={this.handleMaybe}>
                            <Text style={styles.choiceButtonText}>
                                <MaterialCommunityIcons name="heart-broken" size={24} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient style={styles.maybeButton} colors={['#38ef7d', '#12cc85']}>
                        <TouchableOpacity style={styles.yupButton} onPress={this.handleYup}>
                            <Text style={styles.choiceButtonText}>
                                <Entypo name="thumbs-up" size={24} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
                </View>
                <View>
                <AdMobBanner
                style={styles.bottomBanner}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-7006740632293193~4142301085"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError}
                />
        </View>
            </LinearGradient>
        )
    }
}

export default Game;
