## 📝 YAPILACAKLAR

- Sistemde yönlendirmeler yaparken(Link, navigation vb.) her zaman `next-intl`a ait olan apiyi kullanmak gerekiyor.
Bu şekilde localization sistemiyle entegre bir şekilde yönlendirme yapılmış oluyor. Fakat geliştiriciler olarak bunu bilmediğimiz
durum olursa farkında olmadan hata olacak bir yaklaşımı tetiklemiş oluruz. Bu sorunu gidermek için şu eslint config ayarlarının
sistemimizde de uygulanması yararlı olur.

https://next-intl-docs.vercel.app/docs/workflows/linting#consistent-usage-of-navigation-apis
