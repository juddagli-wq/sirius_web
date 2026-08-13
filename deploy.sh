#!/bin/bash

# Python scriptini çalıştırarak tüm HTML dosyalarındaki CSS ve JS linklerine versiyon (?v=timestamp) ekle
python3 update_cache.py

# Değişiklikleri Git'e ekle ve gönder
git add .
git commit -m "Deploy: Güncel versiyon ile önbellek kırıldı"
git push origin main

echo "🚀 Başarıyla GitHub'a gönderildi! Birkaç dakika içinde GitHub Pages üzerinde güncellenecektir."
