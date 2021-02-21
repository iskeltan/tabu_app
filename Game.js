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
                {text: "TAVLA", bannedWords: ["ZAR", "OYUN", "YENMEK", "MARS", "KAPI"]}, 
                {text: "PARA", bannedWords: ["KA\u011eIT", "DOLAR", "SATINALMA", "\u00dcLKE", "KAZANMAK"]}, 
                {text: "MOUSE", bannedWords: ["FARE", "B\u0130LG\u0130SAYAR", "KLAVYE", "TU\u015e", "KL\u0130K"]}, 
                {text: "OJE", bannedWords: ["TIRNAK", "RENK", "S\u00dcRMEK", "ASETON", "MAN\u0130K\u00dcR"]}, 
                {text: "KAFATASI", bannedWords: ["BEY\u0130N", "SA\u00c7", "KEM\u0130K", "ARKEOLOJ\u0130", "KAZI"]}, 
                {text: "RE\u00c7ETE", bannedWords: ["DOKTOR", "\u0130LA\u00c7", "\u0130MZA", "HASTANE", "ECZANE"]}, 
                {text: "BANKA", bannedWords: ["M\u00dc\u015eTER\u0130", "PARA", "HESAP", "\u00c7EK", "KRED\u0130 KARTI"]}, 
                {text: "EV", bannedWords: ["ODA", "SALON", "WC", "YASAMAK", "YUVA"]}, 
                {text: "MASA", bannedWords: ["CEKMECE", "BILGISAYAR", "YEMEK", "KALEM", "DOSYA"]}, 
                {text: "KAZAK", bannedWords: ["YUN", "IPLIK", "SICAK", "ORME", "YASAK"]}, 
                {text: "EXCEL", bannedWords: ["OFF\u0130CE", "B\u0130LG\u0130SAYUAR", "TABLO", "FORM\u00dcL", "WORD"]}, 
                {text: "KARYOLA", bannedWords: ["YATAK", "RANZA", "YASTIK", "AH\u015eAP", "KAT"]}, 
                {text: "A\u015e\u00c7I", bannedWords: ["YEMEK", "MESLEK", "\u00d6NL\u00dcK", "MUTFAK", "Y\u0130YECEK"]}, 
                {text: "\u0130LA\u00c7", bannedWords: ["HASTA", "ATE\u015e", "HAP", "\u0130Y\u0130LE\u015eMEK", "YATAK"]}, 
                {text: "KED\u0130", bannedWords: ["SARMAN", "PAMUK", "T\u00dcY", "KUYRUK", "\u015eIMARIK"]}, 
                {text: "OKUL", bannedWords: ["\u00d6\u011eRENC\u0130", "\u00d6\u011eRETMEN", "DEFTER", "KALEM", "Z\u0130L"]}, 
                {text: "G\u00d6ZL\u00dcK", bannedWords: ["M\u0130YOP", "RENKL\u0130", "TAKMAK", "G\u00dcNE\u015e", "G\u00d6RMEK"]}, 
                {text: "KUMBARA", bannedWords: ["PARA", "B\u0130R\u0130KT\u0130RMEK", "YATIRIM", "BANKA", "SAKLAMAK"]}, 
                {text: "BANKA", bannedWords: ["YATIRIM", "PARA", "SAKLAMAK", "F\u0130NANS", "KRED\u0130"]}, 
                {text: "TELEFON", bannedWords: ["\u015eEBEKE", "GSM", "KONT\u00d6R", "HAT", "AH\u0130ZE"]}, 
                {text: "PAPYON", bannedWords: ["BALO", "ERKEK", "KRAVAT", "SMOK\u0130N", "G\u00d6MLEK"]}, 
                {text: "YALAKA", bannedWords: ["YA\u011eCI", "R\u0130YAKAR", "PATRON", "\u0130\u015eYER\u0130", "\u0130LT\u0130FAT"]}, 
                {text: "\u00c7ALMAK", bannedWords: ["ARAKLAMAK", "HIRSIZ", "EV", "\u0130Z\u0130N", "POL\u0130S"]}, 
                {text: "DVD", bannedWords: ["CD", "PLAYER", "F\u0130LM", "KAL\u0130TE", "G\u00d6R\u00dcNT\u00dc"]}, 
                {text: "FRANSA", bannedWords: ["ERMEN\u0130 SOYKIRIMI", "PAR\u0130S", "EIFEL", "MONACO", "CHRIAK (\u015e\u0130RAK)"]}, 
                {text: "ESK\u0130MO", bannedWords: ["KUTUP", "BUZUL", "KAR", "\u0130GLO", "BALIK"]}, 
                {text: "SAYISAL LOTO", bannedWords: ["\u0130KRAM\u0130YE", "\u015eANS", "TAL\u0130H KU\u015eU", "PARA", "\u00c7EK\u0130L\u0130\u015e"]}, 
                {text: "\u0130SKENDER KEBAP", bannedWords: ["BURSA", "D\u00d6NER", "TEREYA\u011e", "P\u0130DE", "ET"]}, 
                {text: "ECZANE", bannedWords: ["ECZACI", "\u0130LA\u00c7", "RE\u00c7ETE", "KALFA", "HASTA"]}, 
                {text: "BABA", bannedWords: ["MAFYA", "\u00c7OCUK", "ERKEK", "ANNE", "A\u0130LE"]}, 
                {text: "ZEUS", bannedWords: ["ESK\u0130 YUNAN", "M\u0130TOLOJ\u0130", "ANT\u0130K \u015eEH\u0130R TANRISI", "OL\u0130MPOS DA\u011eI", "HEYKEL"]}, 
                {text: "EXCEL", bannedWords: ["MICROSOFT OFFICE", "TABLO", "PROGRAM", "RAKAM", "ISLEM"]}, 
                {text: "GERDEK GECESI", bannedWords: ["GELIN GUVEY", "DUGUN", "EVLENMEK", "YATAK", "BEKARET"]}, 
                {text: "SOZLUK", bannedWords: ["KELIME", "TANIM", "CUMLE", "DIL", "ANLAM"]}, 
                {text: "NAZAR BONCUGU", bannedWords: ["GOZ", "MAVI", "COCUK", "CENGELLI IGNE", "TAKMAK"]}, 
                {text: "BABAM VE OGLUM", bannedWords: ["SINEMA FILMI", "\u00c7A\u011eAN IRMAK", "DEDE", "A\u011eLAMAK", "H\u00dcMEYRA"]}, 
                {text: "G\u00d6KTA\u015eI", bannedWords: ["UZAY", "ALEV TOPU", "\u00c7ARPMAK", "KRATER", "METEOR"]}, 
                {text: "KIRMIZI G\u00dcL", bannedWords: ["A\u015eK", "SEVG\u0130", "\u00c7\u0130\u00c7EK", "YILD\u00d6N\u00dcM\u00dc", "BUKET"]}, 
                {text: "\u00c7INGIRAK", bannedWords: ["YILAN", "BEBEK", "\u00c7AN", "Z\u0130L", "S\u00dcR\u00dcNGEN"]}, 
                {text: "S\u0130L\u0130KON", bannedWords: ["DUDAK", "G\u00d6\u011e\u00dcS", "KADIN", "PATLAMAK", "\u015e\u0130\u015eMEK"]}, 
                {text: "SABAHLIK", bannedWords: ["SABAH", "ROPD\u00d6\u015eAMBR", "G\u0130Y\u0130NMEK", "G\u0130YS\u0130", "KAHVALTI"]}, 
                {text: "KAZIK", bannedWords: ["ODUN", "SOPA", "PAHALI", "Y\u00dcKSEK F\u0130YATLI", "ZOR"]}, 
                {text: "\u015eEYTAN", bannedWords: ["CEHENNEM", "ZEBAN\u0130", "MELEK", "G\u00dcNAH", "SEVAP"]}, 
                {text: "K\u0130V\u0130", bannedWords: ["PATATES", "MEYVE", "YE\u015e\u0130L", "TROP\u0130K", "\u00c7EK\u0130RDEK"]}, 
                {text: "KE\u015e", bannedWords: ["ZOM", "ALKOL\u0130K", "\u0130\u00c7K\u0130C\u0130", "\u0130\u00c7K\u0130", "AK\u015eAMDAN KALMA"]}, 
                {text: "JAPON BALI\u011eI", bannedWords: ["AKVARYUM", "FANUS", "TURUNCU", "TATLI SU", "G\u00d6L"]}, 
                {text: "\u015eEHVET", bannedWords: ["ARZU", "\u0130STEK", "TUTKU", "CAZ\u0130BE", "KADIN"]}, 
                {text: "Z\u0130NA", bannedWords: ["\u0130HANET", "ALDATMAK", "B\u0130RL\u0130KTE OLMAK", "SADAKAT", "KANDIRMAK"]}, 
                {text: "F\u0130LOLOJ\u0130", bannedWords: ["D\u0130L B\u0130L\u0130M", "L\u0130SAN", "\u0130NG\u0130L\u0130ZCE", "D\u0130L VE EDEB\u0130YAT", "\u00dcN\u0130VERS\u0130TE"]}, 
                {text: "N\u0130L\u00dcFER", bannedWords: ["G\u00d6L", "DERE", "\u00c7\u0130\u00c7EK", "KURBA\u011eA", "KAYAHAN"]}, 
                {text: "NAFAKA", bannedWords: ["BO\u015eANMAK", "GE\u00c7\u0130M", "PARA", "AYLIK", "AYRILMAK"]}, 
                {text: "M\u0130KROB\u0130K", bannedWords: ["M\u0130KROP", "V\u0130R\u00dcS", "BULA\u015eICI", "HASTALIK", "M\u0130KROSKOP"]}, 
                {text: "K\u00dcF", bannedWords: ["MANTAR", "BAKTER\u0130", "EKMEK", "YE\u015e\u0130L", "KURT"]}, 
                {text: "NED\u0130ME", bannedWords: ["GEL\u0130N", "GEL\u0130NL\u0130K", "D\u00dc\u011e\u00dcN", "DAMAT", "\u00c7\u0130\u00c7EK"]}, 
                {text: "BANKA", bannedWords: ["PARA", "\u00c7EK", "SENET", "HAVALE", "SOYGUN"]}, 
                {text: "KRAVAT", bannedWords: ["BOYUN", "YAKA", "G\u00d6MLEK", "TAKIM ELB\u0130SE", "MEDEN\u0130YET YULARI"]}, 
                {text: "\u015eEMPANZE", bannedWords: ["MAYMUN", "AYI", "TIRMANMAK", "A\u011eA\u00c7", "\u0130NSAN"]}, 
                {text: "EVLILIK", bannedWords: ["N\u0130KAH", "D\u00dc\u011e\u00dcN", "HALAY", "GEL\u0130NL\u0130K", "KARI-KOCA"]}, 
                {text: "VENED\u0130K", bannedWords: ["GONDOL", "SU", "\u00dcLKE", "BALAYI", "\u0130TALYA"]}, 
                {text: "KEK", bannedWords: ["PASTA", "KALIP", "TOP", "HAMUR", "YEMEK"]}, 
                {text: "FRANBOAZ", bannedWords: ["PASTA ", "PASTANE", "MEYVE", "PEMBE", "BO\u011eAZ"]}, 
                {text: "DUMUR", bannedWords: ["K\u00d6RELMEK", "APTALLA\u015eMAK", "\u015eOK OLMAK", "\u015eA\u015eIRMAK", "\u015eA\u015eKINA D\u00d6NMEK"]}, 
                {text: "K\u0130BR\u0130T", bannedWords: ["VASAT\u0130 40 \u00c7\u00d6P", "\u00c7AKMAK", "ATE\u015e", "S\u0130GARA", "YAKMAK"]}, 
                {text: "UZLA\u015eMAK", bannedWords: ["ANLA\u015eMAK", "\u0130\u015eB\u0130RL\u0130\u011e\u0130", "\u0130TT\u0130FAK", "MUTABAKAT", "UYU\u015eMA"]}, 
                {text: "SUCUK", bannedWords: ["ET", "BAHARAT", "SALAM", "SOS\u0130S", "PASTIRMA"]}, 
                {text: "NASIR", bannedWords: ["AYAK", "YARA", "SERTLE\u015eMEK", "AYAKKABI", "KALP"]}, 
                {text: "FERMUAR", bannedWords: ["PANTOLON", "MONT", "G\u0130YS\u0130", "KIYAFET", "KOT"]}, 
                {text: "\u015eEKERLEME", bannedWords: ["\u015eEKER", "BONBON", "TATLI", "LOKUM", "UYUKLAMAK"]}, 
                {text: "S\u0130GARA", bannedWords: ["\u0130\u00c7MEK", "ZARAR", "KANSER", "C\u0130\u011eER", "DUMAN"]}, 
                {text: "D\u0130G\u0130T\u00dcRK", bannedWords: ["PARALI", "KABLO TV", "\u00dcYEL\u0130K", "PAKET", "TELEV\u0130ZYON"]}, 
                {text: "RAKI", bannedWords: ["ASLAN S\u00dcT\u00dc", "ANASON", "ALKOLL\u00dc \u0130\u00c7ECEK", "BUZ", "MEZE"]}, 
                {text: "OKUL", bannedWords: ["SIRA", "\u00d6\u011eRETMEN", "HADEME", "SINIF", "\u00d6\u011eRENC\u0130"]}, 
                {text: "KALEML\u0130K", bannedWords: ["KALEM", "S\u0130LG\u0130", "KALEMTRA\u015e", "ATA\u00c7", "KALEM UCU"]}, 
                {text: "ANNE", bannedWords: ["SEVEN", "KORUYAN", "D\u00dcNYADA B\u0130R TANE", "\u00c7OCUK", "BABA"]}, 
                {text: "BEBEK", bannedWords: ["ANNE", "BEZ", "EMZ\u0130K", "KOKU", "ANGA"]}, 
                {text: "KAPAN", bannedWords: ["AV", "KURT", "HAVYAN", "TUZAK", "FARE"]}, 
                {text: "A\u015eK", bannedWords: ["SEVMEK", "SEVG\u0130L\u0130", "FL\u00d6RT", "H\u0130S", "\u0130L\u0130\u015eK\u0130"]}, 
                {text: "YELKOVAN", bannedWords: ["SAAT", "ZAMAN", "S\u00dcRE", "AKREP", "DAK\u0130KA"]}, 
                {text: "KLAVYE", bannedWords: ["B\u0130LG\u0130SAYAR", "MAUSE", "YAZMAK", "HARF", "MSN"]}, 
                {text: "PR\u0130Z", bannedWords: ["ELEKTR\u0130K", "F\u0130\u015e", "KABLO", "KONTROL KALEM\u0130", "TAM\u0130RC\u0130"]}, 
                {text: "\u0130T", bannedWords: ["K\u00d6PEK", "K\u00dcF\u00dcR", "KOVALAMAK", "ISIRMAK", "TASMA"]}, 
                {text: "KOZA", bannedWords: ["KELEBEK", "U\u00c7MAK", "B\u00d6CEK", "KANAT", "TIRTIL"]}, 
                {text: "ABAJUR", bannedWords: ["LAMBA", "ISIK", "AMPUL", "ELEKTRIK", "YASAK"]}, 
                {text: "HOLLANDA", bannedWords: ["LALE", "TAHTA", "DEGIRMEN", "AMSTERDAM", "ULKE"]}, 
                {text: "NOSTRADAMUS", bannedWords: ["KAHIN", "KEHANET", "FRANSA", "MUNECCIM", "KITAP"]}, 
                {text: "AKVARYUM", bannedWords: ["BALIK", "CAM", "FILTRE", "SU", "DENIZ"]}, 
                {text: "RADYO", bannedWords: ["M\u00dcZ\u0130K", "\u0130STASYON", "FREKANS(KANAL)", "DJ", "CANLI YAYIN"]}, 
                {text: "DO\u011eUMG\u00dcN\u00dc", bannedWords: ["PASTA", "MUM", "HED\u0130YE", "YA\u015e", "PART\u0130"]}, 
                {text: "SONBAHAR", bannedWords: ["MEVS\u0130M", "YAPRAK", "AYLAR", "BAHAR", "H\u00dcZ\u00dcN"]}, 
                {text: "TEHL\u0130KE", bannedWords: ["UYARI", "\u0130KAZ", "ALARM", "YASAK", "\u00d6L\u00dcM"]}, 
                {text: "A\u011eDA", bannedWords: ["KIL", "BACAK", "KADIN", "KUAF\u00d6R/BERBER", "SESU"]}, 
                {text: "SA\u00c7", bannedWords: ["KUAF\u00d6R/BERBER", "ERKEK/KADIN", "F\u00d6N", "KEST\u0130RMEK", "BOYATMAK"]}, 
                {text: "KLAVYE", bannedWords: ["MOUSE", "PC", "TU\u015e", "KABLO", "HARF/SAYI"]}, 
                {text: "CESET", bannedWords: ["\u00d6L\u00dc", "C\u0130NAYET", "KAT\u0130L", "OTOPS\u0130", "ADL\u0130 TAB\u0130P"]}, 
                {text: "T\u0130YATRO", bannedWords: ["OYUNCU", "SAHNE", "PERDE", "Y\u00d6NETMEN", "OYUN"]}, 
                {text: "MAKAS", bannedWords: ["KA\u011eIT", "KESMEK", "KUMA\u015e", "TERZ\u0130", "N\u0130\u015eAN"]}, 
                {text: "\u00d6RG\u00dc", bannedWords: ["KAZAK", "ATKI", "\u015e\u0130\u015e", "Y\u00dcN", "N\u0130NE"]}, 
                {text: "\u015eEMS\u0130YE", bannedWords: ["YA\u011eUR", "E\u015eANT\u0130YON", "G\u00d6K G\u00dcR\u00dcLT\u00dcS\u00dc", "YAZ", "YA\u011eMURLUK"]}, 
                {text: "VAZO", bannedWords: ["\u00c7\u0130\u00c7EK", "SU", "HED\u0130YE", "BUKET", "\u00c7\u0130\u00c7EK\u00c7\u0130"]}, 
                {text: "RANZA", bannedWords: ["YATAK/\u00c7OCUK YATA\u011eI", "ALT \u00dcST", "ASKER\u0130YE", "ODA/\u00c7OCUK ODASI", "MOB\u0130LYA"]}, 
                {text: "TABU", bannedWords: ["YASAK", "OYUN", "C\u0130NSELL\u0130K", "SEKS", "A\u015eMAK"]}, 
                {text: "K\u00dcNEFE", bannedWords: ["PEYN\u0130R", "KADAYIF", "TATLI", "KAYMAK", "SICAK"]}, 
                {text: "OKAN BAY\u00dcLGEN", bannedWords: ["GECE KU\u015eU", "ZAGA", "TELEV\u0130ZYON MAK\u0130NASI", "REKLAM", "S\u0130NEMA"]},
                {text: "GOOGLE", bannedWords: ["ARAMA MOTORU", "B\u0130LG\u0130SAYAR", "\u0130NTERNET", "S\u0130TE", "SAYFA"]},
                {text: "\u00c7ORAP", bannedWords: ["\u0130NCE", "KA\u00c7MAK", "TEN RENG\u0130", "PAR\u0130ZYEN", "AYAK"]},
                {text: "TAKV\u0130M", bannedWords: ["YIL", "AY", "HAFTA", "G\u00dcN", "SAYI"]},
                {text: "\u015e\u0130M\u015eEK", bannedWords: ["G\u00d6KY\u00dcZ\u00dc", "YA\u011eMUR", "I\u015eIK", "KALP KR\u0130Z\u0130", "KORKU"]},
                {text: "GAGA", bannedWords: ["KU\u015e", "YEMEK", "YAVRU", "SOLUCAN", "A\u011eA\u00c7KAKAN"]},
                {text: "AKREP", bannedWords: ["BUR\u00c7", "SAAT", "YELKOVAN", "ZAMAN", "\u0130BRE"]},
                {text: "D\u00dc\u011e\u00dcN", bannedWords: ["GEL\u0130N", "DAMAT", "M\u0130SAF\u0130R", "Y\u00dcZ\u00dcK", "EVLENMEK"]},
                {text: "OFIS", bannedWords: ["CALISMAK", "PARA", "FOTOKOPI", "FAKS", "TELEFON"]},
                {text: "BILGISAYAR", bannedWords: ["FARE", "EKRAN", "WINDOWS", "EXCEL", "WORD"]},
                {text: "BALIK", bannedWords: ["FIRIN", "TAVA", "ROKA", "HELVA", "OLTA"]},
                {text: "KALEC\u0130", bannedWords: ["FUTBOL", "TOP", "GOL", "ELD\u0130VEN", "PENALTI"]},
                {text: "BANKA", bannedWords: ["PARA", "FA\u0130Z", "ZENG\u0130N", "HIRSIZ", "SOYGUN"]},
                {text: "S\u00dcRAH\u0130", bannedWords: ["SU", "BARDAK", "D\u00d6KMEK", "MUTFAK", "HANIM"]},
                {text: "FOTO\u011eRAF MAK\u0130NES\u0130", bannedWords: ["FLA\u015e", "TAB", "RES\u0130M", "\u00c7EK\u0130M", "POZ"]},
                {text: "TUR\u0130ZM", bannedWords: ["TAT\u0130L", "GEZMEK", "OTEL", "\u015e\u0130RKET", "TUR"]},
                {text: "BANKA", bannedWords: ["PARA", "HESAP", "MEMUR", "M\u00dcD\u00dcR", "M\u00dc\u015eTER\u0130"]},
                {text: "S\u0130NEMA", bannedWords: ["B\u0130LET", "BAH\u015e\u0130\u015e", "F\u0130LM", "KARANLIK", "PATLAMI\u015e MISIR"]},
                {text: "\u00c7ANTA", bannedWords: ["KAPKA\u00c7CI", "C\u00dcZDAN", "KADIN", "E\u015eYA", "KOLA TAKMAK"]},
                {text: "G\u00d6ZL\u00dcK", bannedWords: ["G\u00d6Z", "CAM", "CER\u00c7EVE", "TEKMAK", "BAKMAK"]},
                {text: "MAYMUN", bannedWords: ["HAYVAN", "MUZ", "\u015eEBEKL\u0130K", "EVR\u0130M", "\u00c7\u0130K\u0130TA"]},
                {text: "KAHVE", bannedWords: ["ZEVK", "KAFE\u0130N", "S\u0130GARA", "S\u00dcT TOZU", "F\u0130NCAN"]},
                {text: "ASETON", bannedWords: ["PARMAK", "OJE", "S\u00dcRMEK", "MAN\u0130K\u00dcR", "S\u0130LMEK"]},
                {text: "ORMANCI", bannedWords: ["M\u00dcZEYYEN SENAR", "BALTA", "A\u011eA\u00c7", "Y\u00dcR\u00dcY\u00dc\u015e", "KULUBE"]},
                {text: "NEV\u015eEH\u0130R", bannedWords: ["\u0130L", "KAPADOKYA", "\u00dcRG\u00dcP", "PER\u0130 BACASI", "G\u00d6REME"]},
                {text: "MSN", bannedWords: ["\u0130NTERNET", "CHAT", "ARKADA\u015e", "KAMERA", "ADRES"]},
                {text: "PANDA", bannedWords: ["SOY", "AYI", "BEYAZ", "OYUNCAK", "NESL\u0130 T\u00dcKENMEK"]},
                {text: "PASAPORT", bannedWords: ["YURT DI\u015eI", "EL\u00c7\u0130L\u0130K", "SEYAHAT", "BA\u015eVURU", "EVRAK"]},
                {text: "AKIL HASTANES\u0130", bannedWords: ["DEL\u0130", "PS\u0130K\u0130YATR\u0130ST", "G\u00d6MLEK", "HUN\u0130", "G\u00dcLHANE"]},
                {text: "PUZZLE", bannedWords: ["YAP BOZ", "RES\u0130M", "BULMACA", "KARTON", "OYUN"]},
                {text: "G\u00d6ZL\u00dcK", bannedWords: ["G\u00d6RMEK", "G\u00d6Z", "\u00c7ER\u00c7EVE", " ORGAN\u0130K CAM", "G\u00dcNE\u015e"]},
                {text: "RAKI", bannedWords: ["KADEH", "ANASON", "ICMEK", "MEZE", "ASLAN S\u00dcT\u00dc"]},
                {text: "I TUNES", bannedWords: ["MUZIK", "WINAMP", "MP3", "LISTE", "SARKI"]},
                {text: "TANRI", bannedWords: ["INANMAK", "ALLAH", "ELCI", "PEYGAMBER", "DIN"]},
                {text: "PENGUEN", bannedWords: ["KARIKATUR", "KUTUPLAR", "HAYVAN", "YIGIT OZGUR", "ERDAL YASAROGLU"]},
                {text: "ANAHTAR", bannedWords: ["CILINGIR", "KAPI", "KILIT", "UNUTMAK", "ACMAK"]},
                {text: "NEW YORK", bannedWords: ["A.B.D.", "GEORGE BUSH", "METRO", "OZGURLUK ANITI", "CENTRAL PARK"]},
                {text: "HOKKABAZ", bannedWords: ["S\u0130H\u0130RBAZ", "\u0130LL\u00dcZYON\u0130ST", "MANDRAKE", "H\u0130LEBAZ", "CEM YILMAZ"]},
                {text: "\u00c7ELENK", bannedWords: ["CENAZE", "D\u00dc\u011e\u00dcN", "\u00c7\u0130\u00c7EK", "BUKET", "\u0130S\u0130M"]},
                {text: "ELMA", bannedWords: ["YASAK", "MEYVE", "ARMUT", "KIRMIZI", "ADEM HAVVA"]},
                {text: "HEYELAN", bannedWords: ["TOPRAK KAYMASI", "A\u011eA\u00c7", "YA\u011eMUR", "STEP", "\u00c7AMUR"]},
                {text: "KAZULET", bannedWords: ["AZMAN", "KOCAMAN", "UZUN", "KOSKOCA", "DEV"]},
                {text: "EBE", bannedWords: ["J\u0130NEKOLOG", "DO\u011eUM", "KADIN DOKTORU", "OYUN", "SAKLAMBA\u00c7"]},
                {text: "KEL\u0130ME", bannedWords: ["YASAK", "YASAK", "YASAK", "YASAK", "YASAK"]},
                {text: "J\u00d6LE", bannedWords: ["SA\u00c7", "S\u00dcRMEK", "T\u0130TREMEK", "SALLANMAK", "ISLAK"]},
                {text: "KET\u00c7AP", bannedWords: ["DOMATES SOSU", "MAKARNA", "PATATES", "MAYONEZ", "D\u00d6K D\u00d6K YE"]},
                {text: "SARMA\u015eIK", bannedWords: ["B\u0130TK\u0130", "YAPRAK", "TIRMANAN B\u0130TK\u0130", "SARMAK", "SARILMAK"]},
                {text: "AYRILMAK", bannedWords: ["TERK ETMEK", "\u0130ST\u0130FA ETMEK", "BIRAKMAK", "G\u0130TMEK", "UZAKLA\u015eMAK"]},
                {text: "TERAZ\u0130", bannedWords: ["TARTI", "BASK\u00dcL", "KANTAR", "KEFE", "TARTMAK"]},
                {text: "\u0130MLA KILAVUZU", bannedWords: ["KEL\u0130ME", "DO\u011eRU", "YANLI\u015e", "REHBER", "KONTROL"]},
                {text: "PAN\u0130K ATAK", bannedWords: ["HASTALIK", "\u00d6L\u00dcM KORKUSU", "DEPRESYON", "PS\u0130KOLOJ\u0130K", "TELA\u015e"]},
                {text: "ANT\u0130FR\u0130Z", bannedWords: ["KI\u015e", "MOTOR", "DONMAK", "\u00d6NLEMEK", "SU"]},
                {text: "SODA", bannedWords: ["MADEN SUYU", "\u0130\u00c7ECEK", "GAZLI", "KAYNAK", "YER ALTI"]},
                {text: "\u015e\u0130FRE", bannedWords: ["PAROLA", "KASA", "HIRSIZ", "KART", "B\u0130LG\u0130SAYAR"]},
                {text: "REKT\u00d6R", bannedWords: ["\u00dcN\u0130VERS\u0130TE", "DEKAN", "KAMP\u00dcS", "PROFES\u00d6R", "Y\u00d6K"]},
                {text: "FOTOKOP\u0130", bannedWords: ["KOPYA", "FOTO", "BASIM", "\u00c7O\u011eALTMA", "SURET"]},
                {text: "ALTIN", bannedWords: ["KUYUMCU", "SARRAF", "KIYMET", "\u00c7EYREK", "TAKMAK"]},
                {text: "OKUL", bannedWords: ["SIRA", "MASA", "TAHTA", "TEBE\u015e\u0130R", "\u00d6\u011eRENC\u0130"]},
                {text: "MUM", bannedWords: ["I\u015eIK", "ROMANT\u0130ZM", "YEMEK", "ER\u0130MEK", "KOKULU"]},
                {text: "BARDAK", bannedWords: ["SU ", "\u0130\u00c7MEK", "CAM", "\u0130NCE BELL\u0130", "KADEH"]},
                {text: "KAHVE", bannedWords: ["T\u00dcRK", "F\u0130NCAN", "FAL", "CEZVE", "SOHBET"]},
                {text: "\u015eEKERLEME", bannedWords: ["\u015eEKER", "BONBON", "TATLI", "LOKUM", "UYUKLAMAK"]},
                {text: "KASET", bannedWords: ["V\u0130DEO", "M\u00dcZ\u0130K", "\u015eARKI", "TEYP", "BANT"]},
                {text: "AVOKADO", bannedWords: ["AMER\u0130KA", "ARMUT", "TROP\u0130K", "MEYVE", "ANANAS"]},
                {text: "BALON", bannedWords: ["UYDURMA HABER", "PALAVRA", "U\u00c7MAK", "\u00c7OCUK", "HELYUM"]},
                {text: "KANAT", bannedWords: ["U\u00c7MAK", "MELEK", "U\u00c7AK", "KU\u015e", "TAVUK"]},
                {text: "AY\u015eEKADIN", bannedWords: ["FASULYE", "SEBZE", "YE\u015e\u0130L", "\u0130S\u0130M", "ERKEK"]},
                {text: "D\u0130PS\u0130Z KUYU", bannedWords: ["MUAMMA", "B\u0130L\u0130NMEYEN", "KARANLIK", "F\u0130LM", "THE RING"]},
                {text: "ARI", bannedWords: ["SAF", "HAL\u0130S", "KATI\u015eIKSIZ", "YALIN", "HAYVAN"]},
                {text: "ORU\u00c7 TUTMAK", bannedWords: ["RAMAZAN", "BAYRAM", "\u015eEKER", "KURBAN", "M\u00dcSL\u00dcMAN"]},
                {text: "TAKV\u0130M", bannedWords: ["G\u00dcN", "AY", "YIL", "YAPRAK", "SAYI"]},
                {text: "L\u0130K\u0130T FON", bannedWords: ["PARA", "BANKA", "SIVI", "HESAP", "YATIRIM"]},
                {text: "APARTMAN", bannedWords: ["DA\u0130RE", "KAPICI", "ASANS\u00d6R", "OTOMAT\u0130K", "K\u0130RACI"]},
                {text: "TEKERLEK", bannedWords: ["TA\u015eIT", "YUVARLAK", "LAST\u0130K ", "S\u0130BOP", "YASAK"]},
                {text: "YAZI", bannedWords: ["KALEM", "KA\u011eIT", "HARF", "RAKAM", "KEL\u0130ME"]},
                {text: "KRAL", bannedWords: ["KRAL\u0130\u00c7E", "TAHT", "ASKER", "CAR\u0130YE", "\u015eATO"]},
                {text: "\u015e\u0130M\u015eEK", bannedWords: ["\u00c7AKMASI", "G\u00d6K G\u00dcR\u00dcLT\u00dcS\u00dc", "BULUT", "I\u015eIK", "YA\u011eMUR"]},
                {text: "KAVGA", bannedWords: ["BA\u011eIRMAK", "TARTI\u015eMAK", "KIZMAK", "S\u0130N\u0130RLENMEK", "K\u00dcSMEK"]},
                {text: "PERDE", bannedWords: ["CAM", "T\u00dcL", "PENCERE", "GECE", "KORN\u0130\u015e"]},
                {text: "ZARF", bannedWords: ["MEKTUP", "POSTA", "MA\u0130L", "YAZMAK", "ASKER"]},
                {text: "HALI", bannedWords: ["EV", "Y\u00dcR\u00dcMEK", "AYAK", "AYAKKABI", "YER"]},
                {text: "BEBEK", bannedWords: ["DO\u011eUM", "\u00c7OCUK", "UFAK", "A\u011eLAMAK", "ZIBIN"]},
                {text: "BABAF\u0130NGO", bannedWords: ["BABA", "GEM\u0130", "KALYON", "YELKEN", "D\u0130REK"]},
                {text: "AYI", bannedWords: ["YOGI", "KUTUP", "BOZ", "ARMUT", "HAYVAN"]},
                {text: "BALINA", bannedWords: ["MAVI", "HAYVAN", "DENIZ", "MEMELI", "SU"]},
                {text: "SAMDAN", bannedWords: ["MUM", "ATES", "ISIK", "METAL", "YAKMAK"]},
                {text: "ORUMCEK", bannedWords: ["AG", "SINEK", "ADAM", "TARANTULA", "BACAK"]},
                {text: "OJE", bannedWords: ["ASETON", "TIRNAK", "MAN\u0130K\u00dcR-PED\u0130K\u00dcR", "TORP\u00dc", "EL"]},
                {text: "\u0130LA\u00c7", bannedWords: ["PROSPEKT\u00dcS", "SA\u011eLIK", "ECZANE", "DOKTOR", "RE\u00c7ETE"]},
                {text: "MALA", bannedWords: ["\u0130N\u015eAAT", "DUVAR", "SIVA", "USTA", "\u00c7\u0130MENTO"]},
                {text: "PALET", bannedWords: ["DEN\u0130Z", "AYAK", "BALIK", "DALGI\u00c7", "RES\u0130M"]},
                {text: "ETEK", bannedWords: ["KUMA\u015e", "D\u0130K\u0130\u015e", "TERZ\u0130", "\u0130SKO\u00c7", "G\u0130YS\u0130"]},
                {text: "SAC", bannedWords: ["METAL", "GALVAN\u0130Z", "\u0130TALYAN", "\u0130SPANYOL", "KAVURMA"]},
                {text: "YUMURTA", bannedWords: ["KAHVALTI", "TAVUK", "C\u0130VC\u0130V", "KULU\u00c7KA", "SAHAN"]},
                {text: "RECEP TAY\u0130P ERDO\u011eAN", bannedWords: ["BA\u015eBAKAN", "H\u00dcK\u00dcMET", "AK PART\u0130", "KASIMPA\u015eA", "EM\u0130NE ERDO\u011eAN"]},
                {text: "DEN\u0130Z", bannedWords: ["TUZLU SU", "YAZ", "TAT\u0130L", "GEM\u0130/YAT/VAPUR", "MAYO"]},
                {text: "FATURA", bannedWords: ["F\u0130\u015e", "F\u0130RMA", "KDV", "EMEKL\u0130", "\u0130RSAL\u0130YE"]},
                {text: "GEBE", bannedWords: ["HAM\u0130LE", "BEBEK", "DO\u011eURMAK/DO\u011eMAK", "EBE", "BOR\u00c7LU KALMAK"]},
                {text: "KLOZET", bannedWords: ["TUVALET", "ALAFRANGA", "S\u0130FON", "\u00c7\u0130\u015e/KAKA", "\u0130HT\u0130YA\u00c7"]},
                {text: "MODEM", bannedWords: ["\u0130NTERNET", "ADSL", "W\u0130RELESS", "FAX", "B\u0130LG\u0130SAYAR"]},
                {text: "REKT\u00d6R", bannedWords: ["\u00dcN\u0130VERS\u0130TE", "DEKAN", "KAMP\u00dcS", "PROFES\u00d6R", "Y\u00d6K"]},
                {text: "M\u0130CRO DALGA", bannedWords: ["ALET", "DEN\u0130Z", "MUTFAK", "FIRIN", "ISITMAK"]},
                {text: "ATA DEM\u0130RER", bannedWords: ["KOMEDYEN", "\u015e\u0130\u015eMAN", "AVRUPA YAKASI", "STAND-UP", "KORSAN TV"]},
                {text: "FELEK", bannedWords: ["KAHPE", "\u015eANS", "\u00c7ALMAK", "HAYAT", "GECE"]},
                {text: "BILL GATES", bannedWords: ["ZENG\u0130N", "MICROSOFT", "PARA", "PC", "WINDOWS"]},
                {text: "KALEM", bannedWords: ["KUR\u015eUN", "T\u00dcKENMEZ", "DOLMA", "KA\u011eIT", "\u00c7\u0130ZG\u0130"]},
                {text: "TELEFON", bannedWords: ["ALO", "AH\u0130ZE", "TU\u015e", "SES", "NUMARA"]},
                {text: "STETESKOP", bannedWords: ["SES", "KALP", "DOKTOR", "BOYUN", "KULAK"]},
                {text: "AH\u0130ZE", bannedWords: ["TELEFON", "SES", "ALO", "TU\u015e", "KAB\u0130N"]},
                {text: "APL\u0130K", bannedWords: ["DUVAR", "I\u015eIK", "LAMBA", "AYDINLIK", "S\u00dcS"]},
                {text: "ARABA", bannedWords: ["ULASIM", "ARAC", "HIZ", "FREN", "GAZ"]},
                {text: "OTEL", bannedWords: ["UYUMAK", "TATIL", "HIZMET", "PALAS", "MASAJ"]},
                {text: "PARA", bannedWords: ["EV", "ARABA", "GAYRIMENKUL", "MENKUL", "BONO"]},
                {text: "SILAH", bannedWords: ["SAVUNMA", "SALDIRI", "MERMI", "NAMLU", "ATE\u015e ETMEK"]},
                {text: "YEN\u0130\u00c7ER\u0130", bannedWords: ["OSMANLI", "T\u00dcRK", "ASKER", "ASAKER\u0130 MUHAMMED", "KAZAN KALDIRMAK"]},
                {text: "B\u00d6CEK", bannedWords: ["ZEH\u0130R", "HAYVAN", "YARATIK", "S\u0130NEK", "HA\u015eERE"]},
                {text: "YASTIK", bannedWords: ["UYKU", "YUMU\u015eAK", "T\u00dcY", "BA\u015e", "ORTOPED\u0130K"]},
                {text: "DOLAP", bannedWords: ["RAF", "KAPI", "ASKI", "TABAK", "ELB\u0130SE"]},
                {text: "A\u011eLAMAK", bannedWords: ["YA\u015e", "G\u00d6Z", "AKMAK", "SO\u011eAN", "\u00dcZ\u00dcLMEK"]},
                {text: "MASA", bannedWords: ["YEMEK", "BACAK", "SANDALYE", "\u00d6RT\u00dc", "MOB\u0130LYA"]},
                {text: "REPO", bannedWords: ["MENKUL KIYMET", "BANKA", "L\u0130K\u0130T", "FON", "GECE"]},
                {text: "EMZ\u0130K", bannedWords: ["EMMEK", "BEBEK", "NAYLON", "A\u011eLAMAK", "MEME"]},
                {text: "GEM\u0130", bannedWords: ["DEN\u0130Z", "F\u0130L\u0130KA", "YOLCU", "KAPTAN", "PALAMAR"]},
                {text: "KREM", bannedWords: ["V\u00dcCUT", "SIVI", "EL", "KOZMET\u0130K", "\u0130LA\u00c7"]},
                {text: "MOUSE", bannedWords: ["B\u0130LG\u0130SAYAR", "TIKLAMA", "\u0130NTERNET", "PARMAK", "FARE"]},
                {text: "KALDIRIM", bannedWords: ["YAYA", "ARABA", "GE\u00c7\u0130T", "KAZA", "Y\u00dcR\u00dcMEK"]},
                {text: "TABUT", bannedWords: ["\u00d6L\u00dc", "CENAZE", "MORG", "NAMAZ", "MEZARLIK"]},
                {text: "MEHMET AL\u0130 ERB\u0130L", bannedWords: ["\u015eEBEK", "SOYTARI", "\u00c7ARKIFELEK", "KAHPE B\u0130ZANS", "YARI\u015eMA"]},
                {text: "KASVET", bannedWords: ["SIKINTI", "GAM ", "KEDER", "NE\u015eE", "KARANLIK"]},
                {text: "PR\u0130NTER", bannedWords: ["YAZICI", "KA\u011eIT", "B\u0130LG\u0130SAYAR", "D\u00d6K\u00dcM", "WORD"]},
                {text: "S\u0130FON", bannedWords: ["TUVALET", "KOKU", "\u0130HT\u0130YA\u00c7", "\u00c7EKMEK", "KLOZET"]},
                {text: "TOSBA\u011eA", bannedWords: ["ARABA", "ESK\u0130", "VOSVOS", "KAPLUMBA\u011eA", "KABUK"]},
                {text: "KALP", bannedWords: ["ORGAN", "YA\u015eAM", "KR\u0130Z", "A\u015eK", "KAN KIRMIZI"]},
                {text: "G\u00dcNE\u015e", bannedWords: ["SARI", "SICAKLIK,ISITMAK", "YUVARLAK", "S\u0130STEM", "DO\u011eMAK"]},
                {text: "SENER SEN", bannedWords: ["YESILCAM", "ESKIYA", "IKINCI BAHAR", "AKTOR", "BAD\u0130 EKREM"]},
                {text: "HINDISTAN", bannedWords: ["BAHARAT", "GUNEY ASYA", "GHANDI", "IPEK YOLU", "ULKE"]},
                {text: "ORGANIZE ISLER", bannedWords: ["YILMAZ ERDOGAN", "HIRSIZLIK", "SINEMA FILMI", "SUPERMEN", "NIL KARAIBRAHIMGIL"]},
                {text: "PANSIYON", bannedWords: ["YATAK", "TATIL", "KLIMA", "BOS ODA", "SAHIL"]},
                {text: "AVRUPA YAKASI", bannedWords: ["ISTANBUL", "DIZI", "GULSE BIRSEL", "ATV", "CARSAMBA"]},
                {text: "\u0130NTERNET", bannedWords: ["MA\u0130L", "MODEM", "ADSL", "CHAT", "CAFE"]},
                {text: "KOBRA", bannedWords: ["YILAN", "S\u00dcR\u00dcNGEN", "HAYVAN", "\u00c7INGIRAKLI YILAN", "P\u0130TON"]},
                {text: "G\u00d6ZYA\u015eI", bannedWords: ["A\u011eLAMAK", "G\u00d6Z", "SU", "S\u0130LMEK", "MEND\u0130L"]},
                {text: "G\u0130RDAP", bannedWords: ["ANAFOR", "BURGA\u00c7", "D\u00d6NMEK", "SU", "DEN\u0130Z"]},
                {text: "KAYMAK", bannedWords: ["S\u00dcT", "SK\u0130", "KAYDIRAK", "BAL", "TATLI"]},
                {text: "H\u00d6RG\u00dc\u00c7", bannedWords: ["DEVE", "KAMBUR", "\u015e\u0130\u015eK\u0130NL\u0130K", "SU", "B\u0130NMEK"]},
                {text: "\u0130KT\u0130DAR", bannedWords: ["OTOR\u0130TE", "MUHALEFET", "YETK\u0130", "KUVVET", "PART\u0130"]},
                {text: "B\u00d6R\u00dcLCE", bannedWords: ["SEBZE", "BAKLA", "FASULYE", "FAVA", "G\u00d6R\u00dcMCE"]},
                {text: "MASKARA", bannedWords: ["SOYTARI", "R\u0130MEL", "\u015eAKLABAN", "G\u00d6Z", "K\u0130RP\u0130K"]},
                {text: "KUPA PAPAZI", bannedWords: ["RIFKI", "KING", "\u0130SKAMB\u0130L", "KA\u011eIT", "OYUN"]},
                {text: "G\u00d6BEK BA\u011eI", bannedWords: ["KORDON", "KESMEK", "DEL\u0130K", "\u00c7UKUR", "BEBEK"]},
                {text: "YUMU\u015eAK", bannedWords: ["SERT", "GEV\u015eEK", "ESNEK", "LAST\u0130K", "DOKUNMAK"]},
                {text: "CANKURTARAN", bannedWords: ["BO\u011eULMAK", "DEN\u0130Z", "SAH\u0130L", "AMBULANS", "KURTARMAK"]},
                {text: "ADEM ELMASI", bannedWords: ["ERKEK", "GIRTLAK", "\u00c7IKINTI", "MEYVE", "HAVVA"]},
                {text: "ALAFRANGA", bannedWords: ["TUVALET", "AVRUPA\u0130", "GELENEK", "\u00d6RF", "ADET"]},
                {text: "MEGALOMAN", bannedWords: ["KEND\u0130N\u0130 BE\u011eENMEK", "KASINTI", "BURNU HAVADA", "K\u0130B\u0130R", "\u00d6V\u00dcNMEK"]},
                {text: "MANTAR", bannedWords: ["BEYAZ SEBZE", "K\u00dcF", "NEM", "\u015eARAP", "\u015e\u0130\u015eE"]},
                {text: "HARDAL", bannedWords: ["B\u0130TK\u0130", "HAMBURGER", "SOS", "SARI", "RENK"]},
                {text: "DI\u015e T\u0130CARET", bannedWords: ["\u0130THALAT", "\u0130HRACAT", "YABANCI", "SATMAK", "\u00dcR\u00dcN"]},
                {text: "CETVEL", bannedWords: ["T", "D\u00dcZG\u00dcN", "UZUN", "\u00d6L\u00c7ME", "\u00c7\u0130ZG\u0130"]},
                {text: "SATRAN\u00c7", bannedWords: ["SAH-MAT", "KALE", "VEZ\u0130R", "P\u0130YON", "F\u0130L"]},
                {text: "BIYIK", bannedWords: ["SAKAL", "TRAS", "PALA", "T\u00dcK\u00dcRMEK", "KAYTAN"]},
                {text: "\u00c7ER\u00c7EVE", bannedWords: ["RES\u0130M", "CAM", "FOTO\u011eRAF", "DUVAR", "G\u00d6ZL\u00dcK"]},
                {text: "\u00c7ORAP", bannedWords: ["AYAK", "\u00dc\u015e\u00dcMEK", "KOKMAK", "G\u0130YMEK", "\u00dc\u015e\u00dcMEK"]},
                {text: "DAKT\u0130LO", bannedWords: ["HARF", "TU\u015e", "ST\u0130LO", "KA\u011eIT", "YAZMAK"]},
                {text: "ARI", bannedWords: ["SAF", "HAL\u0130S", "KATI\u015eIKSIZ", "YALIN", "HAYVAN"]},
                {text: "SIFIR", bannedWords: ["YOK", "BA\u015eARISIZ", "EN K\u00dc\u00c7\u00dcK SAYI", "T\u00dcKENMEK", "VER\u0130MS\u0130Z"]},
                {text: "PARA\u015e\u00dcT", bannedWords: ["U\u00c7AK", "ATLAMAK", "U\u00c7MAK", "HAVADA S\u00dcZ\u00dcLMEK", "BALON"]},
                {text: "MAYO", bannedWords: ["B\u0130K\u0130N\u0130", "\u015eORT", "TANGA", "DEN\u0130Z", "HAVUZ"]},
                {text: "BARON", bannedWords: ["KONT", "AS\u0130L", "SOYLU", "POLAT", "KURTLAR VAD\u0130S\u0130"]},
                {text: "B\u00dcY\u00dcKAYI", bannedWords: ["YILDIZ K\u00dcMES\u0130", "K\u00dc\u00c7\u00dcK", "HAYVAN", "GECE", "AY"]},
                {text: "K\u00d6LE", bannedWords: ["ISAURA", "ES\u0130R", "HAP\u0130SHANE", "PRANGA", "TUTSAK"]},
                {text: "KELEBEK", bannedWords: ["RENKL\u0130", "U\u00c7MAK", "TIRTIL", "KOZA", "HAYVAN"]},
                {text: "KL\u0130MA", bannedWords: ["SOBA", "KALOR\u0130FER", "DUVAR", "YAZ", "SICAK"]},
                {text: "D\u0130\u015e", bannedWords: ["ISIRMAK", "DOLGU", "AZI", "\u00c7\u0130\u011eNEMEK", "A\u011eIZ"]},
                {text: "CUMHUR\u0130YET", bannedWords: ["GAZETE", "ATAT\u00dcRK", "Y\u00d6NET\u0130M", "29 Ekim ", "DEVLET"]},
                {text: "OKEY", bannedWords: ["TA\u015e", "ZAR", "ISTAKA", "D\u00d6NMEK", "G\u00d6STERGE"]},
                {text: "KOLTUK", bannedWords: ["OTURMAK", "ODA", "M\u0130NDER", "DER\u0130", "SANDALYE"]},
                {text: "EMEK", bannedWords: ["ALIN TER\u0130", "EL EME\u011e\u0130", "G\u00dc\u00c7", "H\u0130MMET", "\u0130\u015e"]},
                {text: "MALA", bannedWords: ["\u0130N\u015eAAT", "DUVAR", "USTA", "SIVA", "\u00c7\u0130MENTO"]},
                {text: "MONT", bannedWords: ["SO\u011eUK", "KI\u015e", "KAR", "YA\u011eMUR", "\u00dc\u015e\u00dcMEK"]},
                {text: "NEVRES\u0130M", bannedWords: ["\u00c7AR\u015eAF", "YATAK ", "UYKU", "TAKIM", "\u00d6RTMEK"]},
                {text: "ZIMBA", bannedWords: ["KA\u011eIT", "TEL", "B\u0130RLE\u015eT\u0130RMEK", "DELGE\u00c7", "KIRTAS\u0130YE"]},
                {text: "KARTAL", bannedWords: ["KU\u015e", "FUTBOL TAKIMI", "KAFES", "YIRTICI", "KARA"]},
                {text: "\u00d6DEV", bannedWords: ["DERS", "\u00c7ALI\u015eMAK", "OKUL", "\u00d6\u011eRETMEN", "EV"]},
                {text: "MA\u0130L", bannedWords: ["MEKTUP", "\u0130NTERNET", "YOLLAMAK", "B\u0130LG\u0130SAYAR", "\u0130LETMEK"]},
                {text: "EXCEL", bannedWords: ["HUCRE", "TABLO", "MS OFFICE", "BILL GATES", "WORD"]},
                {text: "SIFONYER", bannedWords: ["CEKMECE", "YASAK", "YASAK", "YASAK", "YASAK"]},
                {text: "POKER", bannedWords: ["KUMAR", "BAHIS", "TEXAS", "KART", "ISKAMBIL"]},
                {text: "AMBULANS", bannedWords: ["HASTANE", "ACIL", "ARAC", "HASTA ", "SIREN"]},
                {text: "KUPE", bannedWords: ["KULAK", "AKSESUAR", "DELIK", "HALKA", "DELI "]},
                {text: "KABUS", bannedWords: ["UYUMAK", "YATAK", "D\u00dc\u015e", "R\u00dcYA", "KORKU"]},
                {text: "SAAT", bannedWords: ["YELKOVAN", "AKREP", "ZAMAN", "G\u00dcN", "ALARM"]},
                {text: "H\u0130PODROM", bannedWords: ["VEL\u0130 EFEND\u0130", "AT", "YARI\u015e", "KO\u015eU", "JOKEY"]},
                {text: "TAV\u015eAN", bannedWords: ["HAVU\u00c7", "D\u0130\u015eLEK", "UZUN KULAK ", "BUGS BUNNY", "\u00c7\u0130ZG\u0130 F\u0130LM"]},
                {text: "M\u0130CHAEL JACKSON", bannedWords: ["ZENC\u0130", "\u015eARKICI", "TAC\u0130Z", "RENK DE\u011e\u0130\u015eT\u0130RMEK", "JANET JACKSON"]},
                {text: "HOPARL\u00d6R", bannedWords: ["B\u0130LG\u0130SAYAR", "SES", "M\u00dcZ\u0130K", "TV", "RADYO"]},
                {text: "H\u00dcLYA AV\u015eAR", bannedWords: ["S\u0130NEMA", "SANAT\u00c7I", "MAV\u0130 G\u00d6Z", "HEL\u0130N", "KAYA"]},
                {text: "KATALOG", bannedWords: ["RES\u0130M", "F\u0130RMA/\u0130\u015eYER\u0130", "AJANS", "MANKEN", "\u00dcR\u00dcN"]},
                {text: "HAMAM B\u00d6CE\u011e\u0130", bannedWords: ["BANYO", "YIKANMAK/DU\u015eALMAK", "HA\u015eARE", "KARAFATMA", "KUMKAPI/LANGA"]},
                {text: "ARI", bannedWords: ["BAL", "PETEK/KOVAN", "BALPARMAK", "AYI", "MAYA"]},
                {text: "HA\u00c7", bannedWords: ["HIR\u0130ST\u0130YAN", "\u00c7A\u011eLA \u015eIKEL", "ARTI \u0130\u015eARET\u0130", "\u0130SA", "\u00c7ARMIH"]},
                {text: "CAM\u0130", bannedWords: ["\u0130MAM", "M\u00dcSL\u00dcMAN", "K\u0130L\u0130SE", "\u0130BADET", "NAMAZ"]},
                {text: "UD", bannedWords: ["FASIL/SANAT M\u00dcZ\u0130\u011e\u0130", "M\u00dcZ\u0130K ALET\u0130", "SAZ", "G\u0130TAR", "M\u00dcZ\u0130K KURSU"]},
                {text: "DI\u015e T\u0130CARET", bannedWords: ["\u0130THALAT", "\u0130HRACAT", "YABANCI", "SATMAK", "\u00dcR\u00dcN"]},
                {text: "C\u00dcPPE", bannedWords: ["AVUKAT", "KIYAFET", "MEZUN\u0130YET", "KEP", "T\u00d6REN"]},
                {text: "LAT\u0130FE", bannedWords: ["ATAT\u00dcRK", "F\u0130RST LADY", "\u00c7ANKAYA", "\u0130NKILAP", "KADIN HAKLARI"]},
                {text: "A\u0130DS", bannedWords: ["C\u0130NSELL\u0130K", "PREZERVAT\u0130F", "KAN", "KORUNMAK", "\u00d6L\u00dcM"]},
                {text: "OKEY", bannedWords: ["ZAR", "ISTAKA", "TA\u015e", "4 K\u0130\u015e\u0130", "OYUN"]},
                {text: "A\u015eK", bannedWords: ["KALP", "BAYAN&ERKEK", "TUTKU", "KIRMIZI", "SEKS"]},
                {text: "M\u00dcCEVHER", bannedWords: ["KADIN", "TAKI", "ALTIN", "B\u0130LEZ\u0130K", "KOLYE"]},
                {text: "HASTALIK", bannedWords: ["HASTANE", "HASTA", "DOKTOR", "HEM\u015e\u0130RE", "\u0130LA\u00c7"]},
                {text: "\u00c7ER\u00c7EVE", bannedWords: ["CAM", "RES\u0130M", "P\u0130MAPEN", "AH\u015eAP", "G\u00d6ZL\u00dcK"]},
                {text: "FUTBOL", bannedWords: ["TOP", "\u0130DDAA", "KALE", "STADYUM", "MA\u00c7"]},
                {text: "UCAK", bannedWords: ["UCMAK", "HAVA", "HIZ", "HOSTES", "PILOT"]},
                {text: "DOST", bannedWords: ["GUVEN", "SAMIMI", "DURUST", "NAMUSLU", "AHLAKLI"]},
                {text: "BORSA", bannedWords: ["INIS", "CIKIS", "H\u0130SSE", "SUPEKILASYON", "BROKER"]},
                {text: "TURKIYE", bannedWords: ["ATATURK", "CENNET", "BUYUK", "ISTANBUL", "\u00dcLKE"]},
                {text: "B\u0130S\u0130KLET", bannedWords: ["TEKERLEK", "D\u0130REKS\u0130YON", "PEDAL", "FREN", "\u00c7OCUK"]},
                {text: "FATURA", bannedWords: ["BOR\u00c7", "KA\u011eIT", "POSTACI", "PARA", "F\u0130\u015e"]},
                {text: "TELEFON", bannedWords: ["ALO", "AH\u0130ZE", "CEP", "KONU\u015eMAK", "TELS\u0130Z"]},
                {text: "T\u00dcRBAN", bannedWords: ["BA\u015e", "SA\u00c7", "\u00d6RTMEK", "D\u0130N", "KADIN"]},
                {text: "SAAT", bannedWords: ["KOL", "DUVAR", "ZAMAN", "SAYI", "24"]},
                {text: "ANAHTAR", bannedWords: ["K\u0130L\u0130T", "METAL", "KASA", "KAPI", "\u00c7\u0130L\u0130NG\u0130R"]},
                {text: "F\u0130NCAN", bannedWords: ["\u00c7AY", "KAHVE", "SICAK", "KULP", "\u0130\u00c7MEK"]},
                {text: "PARF\u00dcM", bannedWords: ["KOKU", "G\u00dcZEL", "M\u0130S G\u0130B\u0130", "SIKMAK", "TERLEMEK"]},
                {text: "OTOMOB\u0130L", bannedWords: ["TEKERLEK", "D\u0130REKS\u0130YON", "MOTOR YA\u011eI", "KORNA", "EMN\u0130YET KEMER\u0130"]},
                {text: "ANT\u0130KA", bannedWords: ["M\u00dcZAYEDE", "ZENG\u0130N", "ESK\u0130", "TABLO", "PARA"]},
                {text: "PET \u015e\u0130\u015eE", bannedWords: ["SU", "\u00c7\u00d6P TENEKES\u0130", "ATIK", "NAYLON", "\u0130\u00c7MEK"]},
                {text: "\u00d6K\u00dcZ", bannedWords: ["B\u00dcY\u00dcKBA\u015e HAYVAN", "BOYNUZ", "TREN", "\u0130NEK", "ET"]},
                {text: "Y\u00dcR\u00dcYEN MERD\u0130VEN", bannedWords: ["ALI\u015eVER\u0130\u015e MERKEZ\u0130", "BASAMAK", "ELEKTR\u0130K", "\u00c7IKMAK", "YA\u015eLI"]},
                {text: "PROJE", bannedWords: ["\u0130N\u015eAAT", "M\u0130MAR", "M\u00dcHEND\u0130S", "CETVEL", "\u00c7\u0130Z\u0130M"]},
                {text: "K\u0130MYON", bannedWords: ["BAHARAT", "K\u00d6FTE", "KARAB\u0130BER", "NANE", "KEK\u0130K"]},
                {text: "KUMANDA", bannedWords: ["ZAPLAMA", "D\u00dc\u011eME", "TELEV\u0130ZYON", "UZAK", "BASMAK"]},
                {text: "M\u00dcSL\u00dcM G\u00dcRSES", bannedWords: ["ARABESK", "J\u0130LET", "KONSER", "\u015eARHO\u015e", "MUHTEREM NUR"]},
                {text: "ELMA", bannedWords: ["A\u011eA\u00c7", "TATLI", "KIRMIZI", "MEYVA", "YEMEK"]},
                {text: "KELEBEK", bannedWords: ["TIRTIL", "U\u00c7MAK", "RENKL\u0130", "\u00c7\u0130\u00c7EK", "KOZA"]},
                {text: "BULUT", bannedWords: ["G\u00d6KY\u00dcZ\u00dc", "MAV\u0130", "G\u00dcNE\u015e", "YA\u011eMUR", "HAVA"]},
                {text: "SEVGILILER GUNU", bannedWords: ["14 SUBAT", "ASK", "HEDIYE", "KIRMIZI GUL", "\u00c7\u0130\u00c7EK"]},
                {text: "UNIVERSITE", bannedWords: ["EGITIM", "OKUL", "OSS", "OGRENCI", "FAKULTE"]},
                {text: "HAMAM", bannedWords: ["SAUNA ", "MASAJ", "TELLAK", "TAKUNYA", "KESE"]},
                {text: "KAPADOKYA", bannedWords: ["GOREME", "URGUP", "SARAP", "YERALTI SEHRI", "TATIL"]},
                {text: "GONUL YARASI", bannedWords: ["SINEMA FILMI", "SENER SEN ", "MELTEM CUMBUL", "NAZIM", "SAMATYA"]},
                {text: "SA\u011eDI\u00c7", bannedWords: ["DAMAT", "D\u00dc\u011e\u00dcN", "GEL\u0130N", "G\u00dcVEY", "SIRTINA VURMAK"]},
                {text: "D\u00dc\u011e\u00dcN", bannedWords: ["GEL\u0130N", "DAMAT", "PASTA", "Y\u00dcZ\u00dcK", "N\u0130KAH MEMURU"]},
                {text: "ABAJUR", bannedWords: ["LAMBA", "AV\u0130ZE", "I\u015eIK", "APL\u0130K", "K\u0130TAP OKUMAK"]},
                {text: "KULAK MEMES\u0130", bannedWords: ["ORGAN", "DUYU", "SES", "G\u00d6\u011e\u00dcS", "KEP\u00c7E"]},
                {text: "BOYNUZ", bannedWords: ["KULAK", "ALDATMAK", "BO\u011eA", "KE\u00c7\u0130", "GEY\u0130K"]},
                {text: "NOTA", bannedWords: ["SOL ANAHTARI", "D\u0130YEZ", "BEMOL", "ES", "BESTE"]},
                {text: "KULU\u00c7KA", bannedWords: ["TAVUK", "HOROZ", "YUMURTA", "C\u0130VC\u0130V", "K\u00dcMES"]},
                {text: "DEM\u0130RBA\u015e", bannedWords: ["OF\u0130S", "B\u00dcRO E\u015eYASI", "DE\u011e\u0130\u015eMEZ", "ESK\u0130", "MALZEME"]},
                {text: "RAKI", bannedWords: ["MEZE", "BO\u011eMA", "MAST\u0130KA", "ASLAN S\u00dcT\u00dc", "ANASON"]},
                {text: "ANT\u0130KA", bannedWords: ["DE\u011eERL\u0130", "ESK\u0130", "T\u0130P", "C\u0130NS", "M\u00dcCEVHER"]},
                {text: "APSE", bannedWords: ["\u0130LT\u0130HAP", "D\u0130\u015e", "S\u0130V\u0130LCE", "ERGENL\u0130K", "A\u011eRIMAK"]},
                {text: "KOVUK", bannedWords: ["\u0130N", "MA\u011eARA", "OYUK", "BARINAK", "HAYVAN"]},
                {text: "HEYKEL", bannedWords: ["SANAT", "RES\u0130M", "D\u00dc\u015e\u00dcNEN ADAM", "B\u00dcST", "YONTMAK"]},
                {text: "RAFTING", bannedWords: ["AKINTI", "DERE", "BOT", "K\u00dcREK", "SU SPORU"]},
                {text: "BALDIR", bannedWords: ["BACAK", "UYLUK", "V\u00dcCUT", "AYAK", "D\u0130Z"]},
                {text: "MENTOL", bannedWords: ["NANE", "FERAH", "\u015eEKER", "SAKIZ", "V\u0130CKS"]},
                {text: "M\u0130NYAT\u00dcR", bannedWords: ["K\u00dc\u00c7\u00dcK", "PROTOT\u0130P", "UFAK", "M\u0130N\u0130K", "M\u0130NYAT\u00dcRK"]},
                {text: "S\u0130VR\u0130S\u0130NEK", bannedWords: ["HAYVAN", "U\u00c7MAK", "KAN EMMEK", "\u0130SKAMB\u0130L KA\u011eIDI", "GECE"]},
                {text: "TABU", bannedWords: ["YASAK", "OYUN", "C\u0130NSELL\u0130K", "SEKS", "A\u015eMAK"]},
                {text: "ORU\u00c7", bannedWords: ["\u0130FTAR", "SAHUR", "RAMAZAN", "A\u00c7LIK", "TERAV\u0130H"]},
                {text: "KUMANDA", bannedWords: ["UZAK", "TV", "TU\u015e", "ZAP", "KANAL"]},
                {text: "FOTOGRAF", bannedWords: ["POZ", "RES\u0130M", "\u00c7EKMEK", "DEKLAN\u015e\u00d6R", "FLASH"]},
                {text: "KOLYE", bannedWords: ["TAKI", "BONCUK", "Z\u0130NC\u0130R", "B\u0130JUTER\u0130", "KUYUMCU"]},
                {text: "DOKTOR", bannedWords: ["MESLEK", "HASTA(HANE)", "RE\u00c7ETE", "TIP", "SA\u011eLIK"]},
                {text: "K\u00dcLL\u00dcK", bannedWords: ["S\u0130GARA", "\u00c7AKMAK", "ATE\u015e", "\u00c7\u00d6P", "MASA "]},
                {text: "KELEBEK", bannedWords: ["RENKL\u0130", "U\u00c7MAK", "TIRTIL", "KOZA", "HAYVAN"]},
                {text: "ORTALAMA", bannedWords: ["\u0130K\u0130S\u0130 ARASINDA", "ORTASINDA", "YARISI", "ORTA KARAR", "VASAT\u0130"]},
                {text: "KARA KUTU", bannedWords: ["U\u00c7AK", "P\u0130LOT", "HAVA", "SES KAYDI", "ENKAZ"]},
                {text: "PARAZ\u0130T", bannedWords: ["CIZIRTI", "ASALAK", "TENYA", "AM\u0130P", "K\u00d6PEK BALI\u011eI"]},
                {text: "BAMYA", bannedWords: ["SEBZE", "YE\u015e\u0130L", "T\u00dcYL\u00dc", "K\u00dc\u00c7\u00dcK", "SALYA"]},
                {text: "BALMUMU", bannedWords: ["MUM", "ER\u0130MEK", "HEYKEL", "M\u00dcZE", "BAL"]},
                {text: "MAYIN", bannedWords: ["BASMAK", "PATLAMA", "SAVA\u015e", "TER\u00d6R\u0130ST", "BOMBA"]},
                {text: "U\u011eUR B\u00d6CE\u011e\u0130", bannedWords: ["HAYVAN", "U\u00c7MAK", "BENEK", "KIRMIZI", "KANAT"]},
                {text: "PLAY STAT\u0130ON", bannedWords: ["B\u0130LG\u0130SAYAR", "OYUN", "JOY ST\u0130CK", "TELEV\u0130ZYON", "ATAR\u0130"]},
                {text: "GEL\u0130NL\u0130K", bannedWords: ["DAMAT", "D\u00dc\u011e\u00dcN", "DANTEL", "DUVAK", "BEYAZ"]},
                {text: "G\u00dcNE\u015e", bannedWords: ["AY", "DOKTOR", "GECE-G\u00dcND\u00dcZ", "D\u00dcNYA", "YILDIZ"]},
                {text: "MUTFAK", bannedWords: ["TENCERE", "\u00c7AYDANLIK", "YEMEK", "OCAK", "KA\u015eIK"]},
                {text: "MASA ", bannedWords: ["YEMEK", "AYAK", "\u00d6RT\u00dc", "MUTFAK", "SALON"]},
                {text: "A\u011eA\u00c7", bannedWords: ["DAL", "YAPRAK", "TIRTIL", "MEYVE", "YE\u015e\u0130L"]},
                {text: "EBE", bannedWords: ["HASTA(HANE)", "BEBEK", "DOGUM", "DUNYA", "K\u00d6R"]},
                {text: "KIRMIZI", bannedWords: ["DOMATES", "BO\u011eA", "RENK", "AL", "UTANMAK"]},
                {text: "\u00c7AKMAK", bannedWords: ["S\u0130GARA", "ATE\u015e", "YAKMAK", "Z\u0130PPO", "K\u0130BR\u0130T"]},
                {text: "DELGE\u00c7", bannedWords: ["KA\u011eIT", "DELMEK", "ZIMBA", "KIRTAS\u0130YE", "DEL\u0130K"]},
                {text: "MUTFAK", bannedWords: ["YEMEK", "SOFRA", "HAZIRLAMAK", "FIRIN", "P\u0130\u015e\u0130RMEK"]},
                {text: "Y\u00dcZ\u00dcK", bannedWords: ["PARMAK", "TAKI", "EVL\u0130L\u0130K", "N\u0130KAH", "N\u0130\u015eAN"]},
                {text: "SIR", bannedWords: ["YASAK", "ANLATMAK", "G\u0130ZL\u0130", "PAYLA\u015eMAK", "SAKLAMAK"]},
                {text: "TANGO", bannedWords: ["ARJANTIN", "DANS", "LATIN", "AL PACINO", "TUTKU"]},
                {text: "FATIH SULTAN MEHMET", bannedWords: ["ISTANBUL", "PADISAH", "OSMANLI", "GEMI", "FETIH"]},
                {text: "MP3", bannedWords: ["BILGISAYAR", "SARKI", "MUZIK", "INDIRMEK", "PROGRAM"]},
                {text: "JUPITER", bannedWords: ["ZEUS", "GEZEGEN", "DUNYA", "KUYRUKLU YILDIZ", "BUYUK"]},
                {text: "MUSLUK", bannedWords: ["SU", "LAVABO", "BULASIK", "BANYO", "MUTFAK"]},
                {text: "S\u0130GARA", bannedWords: ["T\u00dcT\u00dcN", "N\u0130KOT\u0130N", "K\u00dcLL\u00dcK", "\u0130ZMAR\u0130T", "K\u0130BR\u0130T-\u00c7AKMAK"]},
                {text: "K\u0130TAP", bannedWords: ["SAYFA", "ROMAN", "H\u0130KAYE", "AYRA\u00c7", "\u015e\u0130\u0130R"]},
                {text: "PANTOLON", bannedWords: ["AYAK", "JEANS", "KUMA\u015e", "FERMUAR", "D\u00dc\u011eME"]},
                {text: "S\u0130GARA", bannedWords: ["T\u00dcT\u00dcN", "\u0130\u00c7\u0130NE \u00c7EKMEK", "\u00c7AKMAK", "PAKET", "K\u00dcLTABLASI"]},
                {text: "AJANDA", bannedWords: ["TAKV\u0130M", "E\u015eANT\u0130YON", "TAR\u0130H", "TELEFON REHPER\u0130", "YILBA\u015eI"]},
                {text: "KIRBA\u00c7", bannedWords: ["KOVBOY", "AT ARABASI", "FANTAZ\u0130", "DER\u0130", "\u0130\u015eKENCE"]},
                {text: "SANDAL", bannedWords: ["SEFA", "DEN\u0130Z", "K\u00dcREK", "BALIK\u00c7I", "MOTOR"]},
                {text: "TOKA", bannedWords: ["KAFA", "SA\u00c7", "KUAF\u00d6R", "B\u0130JUTER\u0130", "\u00c7OCUK"]},
                {text: "ZARF", bannedWords: ["MEKTUP", "FATURA", "POSTAHANE", "POSTACI", "SINAV SONU\u00c7"]},
                {text: "HAK\u0130M", bannedWords: ["AVUKAT", "MAHKEME", "SU\u00c7LU", "OLAY", "KONTOL ALINA ALMAK"]},
                {text: "KALEML\u0130K", bannedWords: ["KALEM", "OKUL", "\u00d6\u011eREC\u0130", "YAZI", "MASA \u00dcZER\u0130"]},
                {text: "FOTOKOP\u0130", bannedWords: ["KOPYA", "MAK\u0130NE", "FAX", "SCANNER", "KIRTAS\u0130YE"]},
                {text: "BA\u011eLAMA", bannedWords: ["T\u00dcRK\u00dc", "ALEV\u0130", "CEM EV\u0130", "M\u00dcZ\u0130K ALET\u0130", "SAZ"]},
                {text: "AB", bannedWords: ["G\u0130RMEK", "UYUM ", "YASA", "KIBRIS", "KOPENHAG"]},
                {text: "DONDURMA", bannedWords: ["SO\u011eUK", "YAZ", "S\u00dcT", "K.MARA\u015e", "K\u00dcLAH"]},
                {text: "V\u0130AGRA", bannedWords: ["KULLANMAK", "\u0130LA\u00c7", "\u0130KT\u0130DARSIZLIK", "ADROPOZ", "YA\u015eLI"]}
                
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
            teamFirstWords: [],
            teamSecondWords: []
        }
        this.shuffle();
    }


    handleYup = (card) =>{
        let activeCard = this.state.cards[0];
        activeCard.eventType = "yup";

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
            
            let teamfirstWords = this.state.teamFirstWords;
            teamfirstWords.push(activeCard);
        }else{
            this.setState({teamSecondScore: this.state.teamSecondScore + 1});
            currentScore = this.state.teamSecondScore+1;

            let teamSecondWords = this.state.teamSecondWords;
            teamSecondWords.push(activeCard);
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
                teamSecondPass: this.state.teamSecondPass,
                teamFirstWords: this.state.teamFirstWords,
                teamSecondWords: this.state.teamSecondWords
            });
        }
    }

    handleNope = (card) =>{
        let activeCard = this.state.cards[0];
        activeCard.eventType = "nope";

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

            if(activeCard){
                let teamfirstWords = this.state.teamFirstWords;
                teamfirstWords.push(activeCard);
            }

        }else{
            if(this.state.teamSecondScore <= endScore){
                return
            }
            this.setState({teamSecondScore: this.state.teamSecondScore - 1})

            if(activeCard){
                let teamSecondWords = this.state.teamSecondWords;
                teamSecondWords.push(activeCard);
            }

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
        let activeCard = this.state.cards[0];
        activeCard.eventType = "maybe";

        if(this.state.isPaused){
            return
        }

        if(this.state.playerTeam == this.props.teamFirst){
            if(this.state.teamFirstPass <= 0){
                return
            }
            this.setState({teamFirstPass: this.state.teamFirstPass - 1});
            if(activeCard){
                let teamfirstWords = this.state.teamFirstWords;
                teamfirstWords.push(activeCard);
            }
            

        }else{
            if(this.state.teamSecondPass <= 0){
                return
            }
            this.setState({teamSecondPass: this.state.teamSecondPass - 1});
            
            if(activeCard){
                let teamSecondWords = this.state.teamSecondWords;
                teamSecondWords.push(activeCard);
            }
            
        }


        let cardsList = this.shuffleList(this.state.cards);
        let newList = [];

        for(let i = cardsList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            newList.push(cardsList[i]);
        }

        this.setState({cards: newList});
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

                        let cardsList = this.shuffleList(this.state.cards);
                        let newList = [];

                        for(let i = cardsList.length - 1; i > 0; i--) {
                            let j = Math.floor(Math.random() * (i + 1));
                            newList.push(cardsList[i]);
                        }

                        this.setState({cards: newList}); 

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
                        <TouchableOpacity style={styles.nopeButton} onPress={this.handleNope}>
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
