const express = require('express')
const app = express()
const port = 8181
app.use(express.static('public'))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/config', (req, res) => {
  res.send({
    form: {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        name: {
          type: 'string',
          title: 'Nhập số điện thoại của bạn'
        },
        email: {
          type: 'string',
          format: 'email',
          title: 'Nhập email của bạn'
        },
        input: {
          type: 'submit',
          title: 'Đăng ký'
        },
        zalo: {
          type: 'zalo_follow',
          default: '2293893445652565977'
        }
      }
    },
    messageSuccess: {
      title: 'Cảm ơn đã đăng kí!',
      description: 'Kiểm tra email của bạn để biết thông báo xác nhận.',
    },
    mesError: 'Lỗi rồi nhé',
    style: {
      backgroundColor: '#000000',
      backgroundImage: 'https://file.hstatic.net/1000300454/file/bannerpopup-bkg_15bc9d9a882d42139e18f88ccb427ca9.jpg',
      titleColor: '#252a2b',
      btnSubmitColor: 'yellow',
      descriptionColor: '#333',
      messageTitleColor: 'blue',
      messageDesColor: 'green'
    },
    title: 'Đăng ký thành viên geox – nhận ngay voucher trị giá 1.000.000 vnđ',
    description: 'và rất nhiều ưu đãi khác đang chờ bạn!',
    formType: 'type1',
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})