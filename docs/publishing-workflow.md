Đây là quy trình đăng bài theo `cmd`, từng bước rất thẳng.

**1. Mở thư mục project**
```cmd
cd C:\Users\nguye\electronics-software-blog
```

**2. Chạy web local để xem trước**
```cmd
"C:\Program Files\nodejs\npm.cmd" run dev
```

Sau đó mở trình duyệt:
`http://localhost:3000`

**3. Tạo file bài viết mới**
Vào thư mục:
[content\posts](C:\Users\nguye\electronics-software-blog\content\posts)

Tạo một file mới, ví dụ:
[content\posts\debug-uart-esp32.mdx](C:\Users\nguye\electronics-software-blog\content\posts\debug-uart-esp32.mdx)

**4. Dán mẫu bài này vào**
```mdx
---
title: "Debug UART cho ESP32"
excerpt: "Ghi chu nhanh ve cach mo serial monitor, chon baudrate va doc log boot."
date: "2026-04-09"
tags:
  - esp32
  - uart
  - debug
---

## Muc tieu

Ghi lai quy trinh doc log UART khi debug board ESP32.

## Setup

- Baudrate: `115200`
- Tool: `idf.py monitor`
- Kiem tra dung cong COM truoc khi flash

## Loi thuong gap

- Sai baudrate thi log se bi rac.
- Day USB chi sac dien thi khong co serial.
- Driver USB-UART chua cai thi may khong nhan cong.

## Lenh mau

```bash
idf.py flash monitor
```

## Ghi chu them

Ban co the them hinh, bang, danh sach linh kien hoac code block vao day.
```

**5. Xem bài trên web local**
URL bài sẽ là:
`http://localhost:3000/posts/debug-uart-esp32/`

Tên file quyết định link bài:
- `debug-uart-esp32.mdx`
- thành `/posts/debug-uart-esp32/`

**6. Khi thấy ổn, quay lại cửa sổ `cmd` khác và push**
Mở thêm một cửa sổ `cmd`, rồi chạy:

```cmd
cd C:\Users\nguye\electronics-software-blog
git add .
git commit -m "Add post debug uart esp32"
git push
```

**7. Chờ GitHub tự deploy**
- vào tab `Actions`
- chờ workflow xanh
- bài sẽ lên site thật

Site thật của bạn sẽ là:
`https://nguyennhando.github.io/electronics-software-blog/`

Bài mới sẽ ở:
`https://nguyennhando.github.io/electronics-software-blog/posts/debug-uart-esp32/`

**Nếu muốn đăng trang dự án thay vì bài blog**
Tạo file trong:
[content\projects](C:\Users\nguye\electronics-software-blog\content\projects)

Ví dụ:
`content\projects\sensor-board-v2.mdx`

Nếu bạn muốn, mình có thể viết tiếp cho bạn:
1. một mẫu bài viết điện tử chuyên nghiệp hơn
2. một mẫu trang dự án chuẩn có BOM, mục tiêu, tiến độ, lỗi đang còn
3. hoặc 5 tiêu đề bài đầu tiên nên đăng cho blog này