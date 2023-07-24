$.ajax({
    url: "./data.json",
    success: function (data) {
        let tag = '';
        $.each(data.items, function (key, value) {
            tag +=
                `
            <div class="thumb">
            <a href="${value.detail}" class="image">
            <img src="${value.thumb}" alt="" /></a>
            <h2>${value.name}</h2>
            </div>
            `;
        })
        $('#main').html(tag);
        $('.thumb').on('click', function (e) {
            e.preventDefault();
            $('.poptrox-overlay').show();

            let idx = $(this).index();
            $('.thumb').eq(idx)

            //클릭한 아이템의 값을 가져오기
            let detail = $(this).find('>a').attr('href');
            let name = $(this).find('h2').text();

            //팝업창안의 정보를 바꾸기
            $('pic img').attr('src', detail);
            $('.caption').text(name);
        });

        $('.closer').on('click', function (e) {
            e.preventDefault();
            $('.poptrox-overlay').hide();

        });
    },
error: function () { }
})