
$.ajax({
    url: "./data.xml",
    beforeSend: function () { console.log('로딩중....') },
    complete: function () { console.log('로딩끝내기') },
    success: function (data) {

        console.log('데이터받았습니다.')

        let detail, thumb, name, tag;
        $(data).find('item').each(function (key, ele) {
            detail = $(ele).find('detail').text();
            thumb = $(ele).find('thumb').text();
            name = $(ele).find('name').text();

            tag = `<div class="thumb">
                        <a href="${detail}" class="image">
                            <img src="${thumb}" alt="" />
                        </a>
                        <h2>${name}</h2>
                    </div>`;

            $('#main').append(tag);
        });

        $('.thumb').on('click', function (e) {
            e.preventDefault();
            idx = $(this).index();
            popup(idx);
        });

        let idx = 0;
        function popup(n) {

            let thumbSrc = $('.thumb').eq(n).find('a').attr('href');
            $('.pic img').attr('src', thumbSrc);
            $('.poptrox-overlay').show();
        }

        $('.poptrox-overlay').on('click', function (e) {
            if (e.target.className == 'closer') {
                $('.poptrox-overlay').hide();
            }
            if (e.target.className == 'nav-previous') {
                idx--;
                popup();
            }
            if (e.target.className == 'nav-next') {
                idx++;
                popup();
            }
        })


    },
    error: function () { }
});
