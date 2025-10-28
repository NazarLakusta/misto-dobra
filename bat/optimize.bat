@echo off
REM --- Масове зменшення панорам ---
REM Перетворюємо всі JPG у WebP з розміром 4096x2048 і якістю 80

if not exist optimized mkdir optimized

for %%i in (*.jpg) do (
    echo Обробляю %%i ...
    magick "%%i" -resize 4096x2048 -quality 80 "optimized\%%~ni.webp"
)

echo ---
echo ✅ Готово! Усі оптимізовані файли збережені в папці "optimized".
pause
