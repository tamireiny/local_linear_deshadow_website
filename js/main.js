App = {};

(function () {

    'use strict';

    var Home = {

        init: function () {
        	this.bindEvents();
            this.scrollReveal();
            this.ratting();
            this.filters();
            this.navigation();
        },

        bindEvents: function () {
        	$('.year').text(new Date().getFullYear());
		    // $('.main-menu li a').on('click', function() {
		    //     $('.main-menu li.active').removeClass('active');
		    //     $(this).closest('li').addClass('active');
		    // });
		    $('.mobile-menu-trigger').on('click', function() {
		        $('.mobile-menu-holder').slideToggle(200);
		    });
        },

        scrollReveal: function () {
            window.sr = ScrollReveal();
            sr.reveal('.sreveal', { duration: 300, reset: true, delay: 100 });
            if (sr.isSupported()) {
                document.documentElement.classList.add('sr');
            }
        },

        filters: function () {
            var _this = this;
            $('.filters_ui').on('click', 'li', function() {
				var i_parent_id = $(this).parent().attr('id');
				var i_parent_id2 = $(this).parent().parent().parent().parent().parent().attr('class');
				var itm_id = $(this).attr('id')
				console.log($('#' + i_parent_id))
                $('#' + i_parent_id + ' li').removeClass('active');
                $('#' + itm_id).addClass('active');
                var filterValue = $(this).attr('data-filter');
				
				//console.log($('.' + i_parent_id2 + ' .demos-w .row .demo-item'))
                $('.' + i_parent_id2 + ' .demos-w .row .demo-item').removeClass('is-visible');
                $(filterValue).addClass('is-visible');
				console.log(itm_id + ' | ' + filterValue + ' | Parent ID: ' + i_parent_id + ' | Gallery ID: ' + i_parent_id2)

                $(window).scrollTop($(window).scrollTop()+1);
                $(window).scrollTop($(window).scrollTop()-1);
            });
        },

		
        ratting: function () {
            switch(window.location.protocol) {
                case 'http:':
                case 'https:':
                    jQuery('.form-content').html("<p>Couldn't find your layout?<br />Submit your idea and you will receive it for <b>FREE</b> in just one week.</p>");
                    jQuery('.btn-rate').remove();
                    jQuery('.btn-contact').html('Submit your idea now <i class="fa fa-angle-right"></i>');
                    //jQuery('.reg_container').remove();
                break;
                case 'file:':
                    //showDialog();
                break;
                default:
                    jQuery('.form-content').html("<p>Couldn't find your layout?<br />Submit your idea and you will receive it for <b>FREE</b> in just one week.</p>");
                    jQuery('.btn-rate').remove();
                    jQuery('.btn-contact').html('Submit your idea now <i class="fa fa-angle-right"></i>');
                    //jQuery('.reg_container').remove();
            }
        },

        navigation: function () {
            jQuery('.main-menu').onePageNav({
                currentClass: 'active',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing',
                begin: function() {
                    //I get fired when the animation is starting
                },
                end: function() {
                    //I get fired when the animation is ending
                },
                scrollChange: function($currentListItem) {
                    //I get fired when you enter a section and I pass the list item of the section
                }
            });
        }
    }

    App.Home = Home;
})();

jQuery(document).ready(function () {
    App.Home.init();
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
});

var app = angular.module('company', ['ngSanitize']);

app.constant("verion", "4.1");
app.constant("layouts", "138");
app.run(function ($rootScope, verion, layouts) {
  $rootScope.verion = verion;
  $rootScope.layouts = layouts;
});

app.controller('demosController', function(){
    this.demo = demolist;
});

app.controller('galleriesController', function(){
    this.gallery = gallerieslist;
});

app.controller('examplesController', function(){
    this.example = exampleslist;
});

app.controller('demosController1', function(){
    this.demo1 = demolist1;
});


app.controller('industriesController', function(){
    this.industry = industrylist;
});

app.controller('customsController', function(){
    this.industry = customlist;
});

app.controller('soonsController', function(){
    this.soon = soonlist;
});

var demolist = [
    {
        class: '3d',
        image: 'images/our_images/Coeff_Red/part1_no_bg.png',
        header: 'Shadow Image',
        url: '#',
    },


    {
        class: 'vr',
        image: 'images/our_images/Coeff_Red/part2_no_bg.png',
        header: '<i> w </i> Coefficient - Red Channel',
        url: '',
    },
   
    
    {
        class: 'popular ',
        image: 'images/our_images/Coeff_Red/part3_no_bg.png',
        header: '<i> b </i> Coefficient - Red Channel',
        url: '',
    },
  
    
];

var exampleslist = [
	{
		example_id: 'example_1',
		example_title: 'SRD Qualitative Examples',
		description: "<a href=https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf target=_blank class='greylink'> [1] Xiaowei Hu, Chi-Wing Fu, Lei Zhu, Jing Qin, and Pheng-Ann Heng. Direction-aware spatial context features for shadow detection and removal</a><br>" + 
					 "<a href=https://arxiv.org/pdf/1911.08718.pdf target=_blank class='greylink'>[2] Xiaodong Cun, Chi-Man Pun, and Cheng Shi. Towards ghost-free shadow removal via dual hierarchical aggregation network and shadow matting gan",
		image_samples: [
		{
				sample_gallery_id: '2906',
				image_titles: [{title: "Shadow Image", filter: "SRD1", id: "SRD1"}, {title: "Shadow Free Image", filter: "SRD2", id: "SRD2"}, 
				{title: "Ours", filter: "SRD3", id: "SRD3"}, {title: "Hu et al [1]", filter: "SRD4", id: "SRD4"}, {title: "Cun et al [2]", filter: "SRD5", id: "SRD5"}],
				demos: [
					{
			class: 'SRD1',
			image: 'images/our_images/SRD/shadow_image/_MG_2906.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_image/_MG_2906.jpg',
		},
		{
			class: 'SRD2',
			image: 'images/our_images/SRD/shadow_free_image/_MG_2906.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_free_image/_MG_2906.jpg',
		},
		{
			class: 'SRD3',
			image: 'images/our_images/SRD/ours/_MG_2906.jpg',
			header: '',
			url: 'images/our_images/SRD/ours/_MG_2906.jpg',
		},
		{
			class: 'SRD4',
			image: 'images/our_images/SRD/DSC/_MG_2906.jpg',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: 'SRD5',
			image: 'images/our_images/SRD/Towards_ghost_free/_MG_2906.jpg',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
			},	
			{
				sample_gallery_id: '2931',
				image_titles: [{title: "Shadow Image", filter: "SRD12", id: "SRD12"}, {title: "Shadow Free Image", filter: "SRD22", id: "SRD22"}, 
				{title: "Ours", filter: "SRD32", id: "SRD32"}, {title: "Hu et al [1]", filter: "SRD42", id: "SRD42"}, {title: "Cun et al [2]", filter: "SRD52", id: "SRD52"}],
				demos: [
					{
			class: 'SRD12',
			image: 'images/our_images/SRD/shadow_image/_MG_2931.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_image/_MG_2931.jpg',
		},
		{
			class: 'SRD22',
			image: 'images/our_images/SRD/shadow_free_image/_MG_2931.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_free_image/_MG_2931.jpg',
		},
		{
			class: 'SRD32',
			image: 'images/our_images/SRD/ours/_MG_2931.jpg',
			header: '',
			url: 'images/our_images/SRD/ours/_MG_2931.jpg',
		},
		{
			class: 'SRD42',
			image: 'images/our_images/SRD/DSC/_MG_2931.jpg',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: 'SRD52',
			image: 'images/our_images/SRD/Towards_ghost_free/_MG_2931.jpg',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
			},	
		{
				sample_gallery_id: '6024',
				image_titles: [{title: "Shadow Image", filter: "SRD13", id: "SRD13"}, {title: "Shadow Free Image", filter: "SRD23", id: "SRD23"}, 
				{title: "Ours", filter: "SRD33", id: "SRD33"}, {title: "Hu et al [1]", filter: "SRD43", id: "SRD43"}, {title: "Cun et al [2]", filter: "SRD53", id: "SRD53"}],
				demos: [
					{
			class: 'SRD13',
			image: 'images/our_images/SRD/shadow_image/IMG_6024.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_image/IMG_6024.jpg',
		},
		{
			class: 'SRD23',
			image: 'images/our_images/SRD/shadow_free_image/IMG_6024.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_free_image/IMG_6024.jpg',
		},
		{
			class: 'SRD33',
			image: 'images/our_images/SRD/ours/IMG_6024.jpg',
			header: '',
			url: 'images/our_images/SRD/ours/IMG_6024.jpg',
		},
		{
			class: 'SRD43',
			image: 'images/our_images/SRD/DSC/IMG_6024.jpg',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: 'SRD53',
			image: 'images/our_images/SRD/Towards_ghost_free/IMG_6024.jpg',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
			},	
		{
				sample_gallery_id: '6080',
				image_titles: [{title: "Shadow Image", filter: "SRD14", id: "SRD14"}, {title: "Shadow Free Image", filter: "SRD24", id: "SRD24"}, 
				{title: "Ours", filter: "SRD34", id: "SRD34"}, {title: "Hu et al [1]", filter: "SRD44", id: "SRD44"}, {title: "Cun et al [2]", filter: "SRD54", id: "SRD54"}],
				demos: [
					{
			class: 'SRD14',
			image: 'images/our_images/SRD/shadow_image/IMG_6080.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_image/IMG_6080.jpg',
		},
		{
			class: 'SRD24',
			image: 'images/our_images/SRD/shadow_free_image/IMG_6080.jpg',
			header: '',
			url: 'images/our_images/SRD/shadow_free_image/IMG_6080.jpg',
		},
		{
			class: 'SRD34',
			image: 'images/our_images/SRD/ours/IMG_6080.jpg',
			header: '',
			url: 'images/our_images/SRD/ours/IMG_6080.jpg',
		},
		{
			class: 'SRD44',
			image: 'images/our_images/SRD/DSC/IMG_6080.jpg',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: 'SRD54',
			image: 'images/our_images/SRD/Towards_ghost_free/IMG_6080.jpg',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
			},	
		]
	},/*
	{
		example_id: 'example_2',
		example_title: 'SRD Shadow Masks Creation Method',
		description: *//*'Unlike ISTD dataset which includes the shadow masks,there is no ground truth shadow mask for the SRD, thereforethe shadow mask must be estimated.' + */
		/*'The SRD dataset does not include a groung truth shadow mask. Therefore, the shadow mask must be estimated.' +
		' Unlike previous works [1, 2], we decided not to use the shadow masks calculated by DHAN [1], as they do not capture the shadow regions accurately .' + 
		' Instead, we calculated our own masks by thresholding the differences between the shadow and shadow-free images with low and high thresholds and combining them together ' + 
		'with additional morphological operations. We used median filter to clean the images before the threshold step. <br><br>' + 
		"<a href=https://arxiv.org/pdf/1911.08718.pdf target=_blank class='greylink'>" + '[1] Xiaodong Cun, Chi-Man Pun, and Cheng Shi. Towards ghost-free shadow removal via dual hierarchical aggregation network and shadow matting gan </a><br>' + 
		"<a href=https://openaccess.thecvf.com/content/CVPR2021/papers/Fu_Auto-Exposure_Fusion_for_Single-Image_Shadow_Removal_CVPR_2021_paper.pdf target=_blank class='greylink'>" + '[2] Lan Fu, Changqing Zhou, Qing Guo, Felix Juefei-Xu, Hongkai Yu, Wei Feng, Yang Liu, and Song Wang. Auto-exposure fusion for single-image shadow removal </a><br>',
		image_samples: [
			{
				sample_gallery_id: 'MG_2906',
				image_titles: [{title: "Shadow Image", filter: "m1", id: "m1"}, {title: "Our Ground Truth", filter: "m2", id: "m2"}, {title: "DHAN Ground Truth [1]", filter: "m3", id: "m3"}],
				demos: [
					{
					class: 'm1',
					image: 'images/our_images/masks/shadow_image/MG_2906.jpg',
					header: '',
					url: '',
				},
				{
					class: 'm2',
					image: 'images/our_images/masks/ours/MG_2906.jpg',
					header: '',
					url: '',
				},
				{
					class: 'm3',
					image: 'images/our_images/masks/DHAN/MG_2906.jpg',
					header: '',
					url: '',
				}]
			},
			{
				sample_gallery_id: 'MG_3448',
				image_titles: [{title: "Shadow Image", filter: "m12", id: "m12"}, {title: "Our Ground Truth", filter: "m22", id: "m22"}, {title: "DHAN Ground Truth [1]", filter: "m32", id: "m32"}],
				demos: [
					{
					class: 'm12',
					image: 'images/our_images/masks/shadow_image/_MG_3448.jpg',
					header: '',
					url: 'images/our_images/masks/shadow_image/_MG_3448.jpg',
				},
				{
					class: 'm22',
					image: 'images/our_images/masks/ours/_MG_3448.jpg',
					header: '',
					url: 'images/our_images/masks/ours/_MG_3448.jpg',
				},
				{
					class: 'm32',
					image: 'images/our_images/masks/DHAN/_MG_3448.jpg',
					header: '',
					url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
				}]
			},
			{
				sample_gallery_id: 'MG_5491',
				image_titles: [{title: "Shadow Image", filter: "m13", id: "m13"}, {title: "Our Ground Truth", filter: "m23", id: "m23"}, {title: "DHAN Ground Truth [1]", filter: "m33", id: "m33"}],
				demos: [
					{
					class: 'm13',
					image: 'images/our_images/masks/shadow_image/IMG_5491.jpg',
					header: '',
					url: 'images/our_images/masks/shadow_image/IMG_5491.jpg',
				},
				{
					class: 'm23',
					image: 'images/our_images/masks/ours/IMG_5491.jpg',
					header: '',
					url: 'images/our_images/masks/ours/IMG_5491.jpg',
				},
				{
					class: 'm33',
					image: 'images/our_images/masks/DHAN/IMG_5491.jpg',
					header: '',
					url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
				}]
			},
			{
				sample_gallery_id: 'MG_5878',
				image_titles: [{title: "Shadow Image", filter: "m14", id: "m14"}, {title: "Our Ground Truth", filter: "m24", id: "m24"}, {title: "DHAN Ground Truth [1]", filter: "m34", id: "m34"}],
				demos: [
					{
					class: 'm14',
					image: 'images/our_images/masks/shadow_image/_MG_5878.jpg',
					header: '',
					url: 'images/our_images/masks/shadow_image/_MG_5878.jpg',
				},
				{
					class: 'm24',
					image: 'images/our_images/masks/ours/_MG_5878.jpg',
					header: '',
					url: 'images/our_images/masks/ours/_MG_5878.jpg',
				},
				{
					class: 'm34',
					image: 'images/our_images/masks/DHAN/_MG_5878.jpg',
					header: '',
					url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
				}]
			},
			{
				sample_gallery_id: 'MG_6275',
				image_titles: [{title: "Shadow Image", filter: "m15", id: "m15"}, {title: "Our Ground Truth", filter: "m25", id: "m25"}, {title: "DHAN Ground Truth [1]", filter: "m35", id: "m35"}],
				demos: [
					{
					class: 'm15',
					image: 'images/our_images/masks/shadow_image/_MG_6275.jpg',
					header: '',
					url: 'images/our_images/masks/shadow_image/_MG_6275.jpg',
				},
				{
					class: 'm25',
					image: 'images/our_images/masks/ours/_MG_6275.jpg',
					header: '',
					url: 'images/our_images/masks/ours/_MG_6275.jpg',
				},
				{
					class: 'm35',
					image: 'images/our_images/masks/DHAN/_MG_6275.jpg',
					header: '',
					url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
				}]
			},
		]
	}*/
];

var gallerieslist = [
    
	{
        gallery_id: '103-10',
		image_titles: [{title: "Shadow Image", filter: "12", id: "12"}, {title: "Shadow Free Image", filter: "22", id: "22"}, {title: "Ours", filter: "32", id: "32"},
					   {title: "Le and Samaras [1]", filter: "42", id: "42"}, {title: "Liu et al (supp) [2]", filter: "52", id: "52"}, {title: "Le and Samaras [3]", filter: "62", id: "62"},
					   {title: "Hu et al [4]", filter: "72", id: "72"}, {title: "Liu et al [2]", filter: "82", id: "82"}, {title: "Gong and Cosker [5]", filter: "92", id: "92"}, {title: "Cun et al [6]", filter: "102", id: "102"}],
		demos: [
			{
			class: '12',
			image: 'images/our_images/shadow_image/103-10.png',
			header: '',
			url: '',
		},
		{
			class: '22',
			image: 'images/our_images/shadow_free_image/103-10.png',
			header: '',
			url: '',
		},
		{
			class: '32',
			image: 'images/our_images/ours/103-10.png',
			header: '',
			url: '',
		},
		{
			class: '42',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/103-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '52',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/103-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '62',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/103-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '72',
			image: 'images/our_images/dsc+_hu/103-10.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '82',
			image: 'images/our_images/shadow_generation_g2r_liu/103-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '92',
			image: 'images/our_images/gong_cosker/103-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '102',
			image: 'images/our_images/towards_ghost_free/103-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },

{
        gallery_id: '105_5',
		image_titles: [{title: "Shadow Image", filter: "13", id: "13"}, {title: "Shadow Free Image", filter: "23", id: "23"}, {title: "Ours", filter: "33", id: "33"},
					   {title: "Le and Samaras [1]", filter: "43", id: "43"}, {title: "Liu et al (supp) [2]", filter: "53", id: "53"}, {title: "Le and Samaras [3]", filter: "63", id: "63"},
					   {title: "Hu et al [4]", filter: "73", id: "73"}, {title: "Liu et al [2]", filter: "83", id: "83"}, {title: "Gong and Cosker [5]", filter: "93", id: "93"}, {title: "Cun et al [6]", filter: "103", id: "103"}],
		demos: [
			{
			class: '13',
			image: 'images/our_images/shadow_image/105-5.png',
			header: '',
			url: 'images/our_images/shadow_image/105-5.png',
		},
		{
			class: '23',
			image: 'images/our_images/shadow_free_image/105-5.png',
			header: '',
			url: '',
		},
		{
			class: '33',
			image: 'images/our_images/ours/105-5.png',
			header: '',
			url: '',
		},
		{
			class: '43',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/105-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08638.pdf',
		},
		{
			class: '53',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/105-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '63',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/105-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '73',
			image: 'images/our_images/dsc+_hu/105-5.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '83',
			image: 'images/our_images/shadow_generation_g2r_liu/105-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '93',
			image: 'images/our_images/gong_cosker/105-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '103',
			image: 'images/our_images/towards_ghost_free/105-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },	
	
{
        gallery_id: '113-1',
		image_titles: [{title: "Shadow Image", filter: "14", id: "14"}, {title: "Shadow Free Image", filter: "24", id: "24"}, {title: "Ours", filter: "34", id: "34"},
					   {title: "Le and Samaras [1]", filter: "44", id: "44"}, {title: "Liu et al (supp) [2]", filter: "54", id: "54"}, {title: "Le and Samaras [3]", filter: "64", id: "64"},
					   {title: "Hu et al [4]", filter: "74", id: "74"}, {title: "Liu et al [2]", filter: "84", id: "84"}, {title: "Gong and Cosker [5]", filter: "94", id: "94"}, {title: "Cun et al [6]", filter: "104", id: "104"}],
		demos: [
			{
			class: '14',
			image: 'images/our_images/shadow_image/113-1.png',
			header: '',
			url: 'images/our_images/shadow_image/113-1.png',
		},
		{
			class: '24',
			image: 'images/our_images/shadow_free_image/113-1.png',
			header: '',
			url: 'images/our_images/shadow_free_image/113-1.png',
		},
		{
			class: '34',
			image: 'images/our_images/ours/113-1.png',
			header: '',
			url: '',
		},
		{
			class: '44',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/113-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '54',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/113-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '64',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/113-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '74',
			image: 'images/our_images/dsc+_hu/113-1.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '84',
			image: 'images/our_images/shadow_generation_g2r_liu/113-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '94',
			image: 'images/our_images/gong_cosker/113-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '104',
			image: 'images/our_images/towards_ghost_free/113-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '114-10',
		image_titles: [{title: "Shadow Image", filter: "15", id: "15"}, {title: "Shadow Free Image", filter: "25", id: "25"}, {title: "Ours", filter: "35", id: "35"},
					   {title: "Le and Samaras [1]", filter: "45", id: "45"}, {title: "Liu et al (supp) [2]", filter: "55", id: "55"}, {title: "Le and Samaras [3]", filter: "65", id: "65"},
					   {title: "Hu et al [4]", filter: "75", id: "75"}, {title: "Liu et al [2]", filter: "85", id: "85"}, {title: "Gong and Cosker [5]", filter: "95", id: "95"}, {title: "Cun et al [6]", filter: "105", id: "105"}],
		demos: [
			{
			class: '15',
			image: 'images/our_images/shadow_image/114-10.png',
			header: '',
			url: 'images/our_images/shadow_image/114-10.png',
		},
		{
			class: '25',
			image: 'images/our_images/shadow_free_image/114-10.png',
			header: '',
			url: '',
		},
		{
			class: '35',
			image: 'images/our_images/ours/114-10.png',
			header: '',
			url: '',
		},
		{
			class: '45',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/114-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '55',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/114-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '65',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/114-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '75',
			image: 'images/our_images/dsc+_hu/114-10.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '85',
			image: 'images/our_images/shadow_generation_g2r_liu/114-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '95',
			image: 'images/our_images/gong_cosker/114-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '105',
			image: 'images/our_images/towards_ghost_free/114-10.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '116-4',
		image_titles: [{title: "Shadow Image", filter: "16", id: "16"}, {title: "Shadow Free Image", filter: "26", id: "26"}, {title: "Ours", filter: "36", id: "36"},
					   {title: "Le and Samaras [1]", filter: "46", id: "46"}, {title: "Liu et al (supp) [2]", filter: "56", id: "56"}, {title: "Le and Samaras [3]", filter: "66", id: "66"},
					   {title: "Hu et al [4]", filter: "76", id: "76"}, {title: "Liu et al [2]", filter: "86", id: "86"}, {title: "Gong and Cosker [5]", filter: "96", id: "96"}, {title: "Cun et al [6]", filter: "106", id: "106"}],
		demos: [
			{
			class: '16',
			image: 'images/our_images/shadow_image/116-4.png',
			header: '',
			url: 'images/our_images/shadow_image/116-4.png',
		},
		{
			class: '26',
			image: 'images/our_images/shadow_free_image/116-4.png',
			header: '',
			url: '',
		},
		{
			class: '36',
			image: 'images/our_images/ours/116-4.png',
			header: '',
			url: '',
		},
		{
			class: '46',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/116-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '56',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/116-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '66',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/116-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '76',
			image: 'images/our_images/dsc+_hu/116-4.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '86',
			image: 'images/our_images/shadow_generation_g2r_liu/116-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '96',
			image: 'images/our_images/gong_cosker/116-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '106',
			image: 'images/our_images/towards_ghost_free/116-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '118-4',
		image_titles: [{title: "Shadow Image", filter: "17", id: "17"}, {title: "Shadow Free Image", filter: "27", id: "27"}, {title: "Ours", filter: "37", id: "37"},
					   {title: "Le and Samaras [1]", filter: "47", id: "47"}, {title: "Liu et al (supp) [2]", filter: "57", id: "57"}, {title: "Le and Samaras [3]", filter: "67", id: "67"},
					   {title: "Hu et al [4]", filter: "77", id: "77"}, {title: "Liu et al [2]", filter: "87", id: "87"}, {title: "Gong and Cosker [5]", filter: "97", id: "97"}, {title: "Cun et al [6]", filter: "107", id: "107"}],
		demos: [
			{
			class: '17',
			image: 'images/our_images/shadow_image/118-4.png',
			header: '',

			url: 'images/our_images/shadow_image/118-4.png',
		},
		{
			class: '27',
			image: 'images/our_images/shadow_free_image/118-4.png',
			header: '',
			url: '',
		},
		{
			class: '37',
			image: 'images/our_images/ours/118-4.png',
			header: '',
			url: '',
		},
		{
			class: '47',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/118-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '57',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/118-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '67',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/118-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '77',
			image: 'images/our_images/dsc+_hu/118-4.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '87',
			image: 'images/our_images/shadow_generation_g2r_liu/118-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '97',
			image: 'images/our_images/gong_cosker/118-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '107',
			image: 'images/our_images/towards_ghost_free/118-4.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '119-5',
		image_titles: [{title: "Shadow Image", filter: "18", id: "18"}, {title: "Shadow Free Image", filter: "28", id: "28"}, {title: "Ours", filter: "38", id: "38"},
					   {title: "Le and Samaras [1]", filter: "48", id: "48"}, {title: "Liu et al (supp) [2]", filter: "58", id: "58"}, {title: "Le and Samaras [3]", filter: "68", id: "68"},
					   {title: "Hu et al [4]", filter: "78", id: "78"}, {title: "Liu et al [2]", filter: "88", id: "88"}, {title: "Gong and Cosker [5]", filter: "98", id: "98"}, {title: "Cun et al [6]", filter: "108", id: "108"}],
		demos: [
			{
			class: '18',
			image: 'images/our_images/shadow_image/119-5.png',
			header: '',

			
			url: 'images/our_images/shadow_image/119-5.png',
		},
		{
			class: '28',
			image: 'images/our_images/shadow_free_image/119-5.png',
			header: '',
			url: '',
		},
		{
			class: '38',
			image: 'images/our_images/ours/119-5.png',
			header: '',
			url: '',
		},
		{
			class: '48',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/119-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '58',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/119-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '68',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/119-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '78',
			image: 'images/our_images/dsc+_hu/119-5.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '88',
			image: 'images/our_images/shadow_generation_g2r_liu/119-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '98',
			image: 'images/our_images/gong_cosker/119-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '108',
			image: 'images/our_images/towards_ghost_free/119-5.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '126-3',
		image_titles: [{title: "Shadow Image", filter: "19", id: "19"}, {title: "Shadow Free Image", filter: "29", id: "29"}, {title: "Ours", filter: "39", id: "39"},
					   {title: "Le and Samaras [1]", filter: "49", id: "49"}, {title: "Liu et al (supp) [2]", filter: "59", id: "59"}, {title: "Le and Samaras [3]", filter: "69", id: "69"},
					   {title: "Hu et al [4]", filter: "79", id: "79"}, {title: "Liu et al [2]", filter: "89", id: "89"}, {title: "Gong and Cosker [5]", filter: "99", id: "99"}, {title: "Cun et al [6]", filter: "109", id: "109"}],
		demos: [
			{
			class: '19',
			image: 'images/our_images/shadow_image/126-3.png',
			header: '',

			
			url: 'images/our_images/shadow_image/126-3.png',
		},
		{
			class: '29',
			image: 'images/our_images/shadow_free_image/126-3.png',
			header: '',
			url: '',
		},
		{
			class: '39',
			image: 'images/our_images/ours/126-3.png',
			header: '',
			url: '',
		},
		{
			class: '49',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/126-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '59',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/126-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '69',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/126-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '79',
			image: 'images/our_images/dsc+_hu/126-3.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '89',
			image: 'images/our_images/shadow_generation_g2r_liu/126-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '99',
			image: 'images/our_images/gong_cosker/126-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '109',
			image: 'images/our_images/towards_ghost_free/126-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '124-12',
		image_titles: [{title: "Shadow Image", filter: "110", id: "110"}, {title: "Shadow Free Image", filter: "210", id: "210"}, {title: "Ours", filter: "310", id: "310"},
					   {title: "Le and Samaras [1]", filter: "410", id: "410"}, {title: "Liu et al (supp) [2]", filter: "510", id: "510"}, {title: "Le and Samaras [3]", filter: "610", id: "610"},
					   {title: "Hu et al [4]", filter: "710", id: "710"}, {title: "Liu et al [2]", filter: "810", id: "810"}, {title: "Gong and Cosker [5]", filter: "910", id: "910"}, {title: "Cun et al [6]", filter: "1010", id: "1010"}],
		demos: [
			{
			class: '110',
			image: 'images/our_images/shadow_image/124-12.png',
			header: '',

			
			url: 'images/our_images/shadow_image/124-12.png',
		},
		{
			class: '210',
			image: 'images/our_images/shadow_free_image/124-12.png',
			header: '',
			url: '',
		},
		{
			class: '310',
			image: 'images/our_images/ours/124-12.png',
			header: '',
			url: '',
		},
		{
			class: '410',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/124-12.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '510',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/124-12.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '610',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/124-12.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '710',
			image: 'images/our_images/dsc+_hu/124-12.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '810',
			image: 'images/our_images/shadow_generation_g2r_liu/124-12.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '910',
			image: 'images/our_images/gong_cosker/124-12.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '1010',
			image: 'images/our_images/towards_ghost_free/124-12.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '130-6',
		image_titles: [{title: "Shadow Image", filter: "12", id: "111"}, {title: "Shadow Free Image", filter: "211", id: "211"}, {title: "Ours", filter: "311", id: "311"},
					   {title: "Le and Samaras [1]", filter: "411", id: "411"}, {title: "Liu et al (supp) [2]", filter: "511", id: "511"}, {title: "Le and Samaras [3]", filter: "611", id: "611"},
					   {title: "Hu et al [4]", filter: "711", id: "711"}, {title: "Liu et al [2]", filter: "811", id: "811"}, {title: "Gong and Cosker [5]", filter: "911", id: "911"}, {title: "Cun et al [6]", filter: "1011", id: "1011"}],
		demos: [
			{
			class: '111',
			image: 'images/our_images/shadow_image/130-6.png',
			header: '',		
			url: 'images/our_images/shadow_image/130-6.png',
		},
		{
			class: '211',
			image: 'images/our_images/shadow_free_image/130-6.png',
			header: '',
			url: '',
		},
		{
			class: '311',
			image: 'images/our_images/ours/130-6.png',
			header: '',
			url: '',
		},
		{
			class: '411',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/130-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '511',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/130-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '611',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/130-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '711',
			image: 'images/our_images/dsc+_hu/130-6.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '811',
			image: 'images/our_images/shadow_generation_g2r_liu/130-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '911',
			image: 'images/our_images/gong_cosker/130-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '1011',
			image: 'images/our_images/towards_ghost_free/130-6.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	
{
        gallery_id: '134-1',
		image_titles: [{title: "Shadow Image", filter: "112", id: "112"}, {title: "Shadow Free Image", filter: "212", id: "212"}, {title: "Ours", filter: "312", id: "312"},
					   {title: "Le and Samaras [1]", filter: "412", id: "412"}, {title: "Liu et al (supp) [2]", filter: "512", id: "512"}, {title: "Le and Samaras [3]", filter: "612", id: "612"},
					   {title: "Hu et al [4]", filter: "712", id: "712"}, {title: "Liu et al [2]", filter: "812", id: "812"}, {title: "Gong and Cosker [5]", filter: "912", id: "912"}, {title: "Cun et al [6]", filter: "1012", id: "1012"}],
		demos: [
			{
			class: '112',
			image: 'images/our_images/shadow_image/134-1.png',
			header: '',

			
			url: 'images/our_images/shadow_image/134-1.png',
		},
		{
			class: '212',
			image: 'images/our_images/shadow_free_image/134-1.png',
			header: '',
			url: '',
		},
		{
			class: '312',
			image: 'images/our_images/ours/134-1.png',
			header: '',
			url: '',
		},
		{
			class: '412',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/134-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '512',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/134-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '612',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/134-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '712',
			image: 'images/our_images/dsc+_hu/134-1.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '812',
			image: 'images/our_images/shadow_generation_g2r_liu/134-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '912',
			image: 'images/our_images/gong_cosker/134-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '1012',
			image: 'images/our_images/towards_ghost_free/134-1.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	{
        gallery_id: '99-3',
		image_titles: [{title: "Shadow Image", filter: "1", id: "1"}, {title: "Shadow Free Image", filter: "2", id: "2"}, {title: "Ours", filter: "3", id: "3"},
					   {title: "Le and Samaras [1]", filter: "4", id: "4"}, {title: "Liu et al (supp) [2]", filter: "5", id: "5"}, {title: "Le and Samaras [3]", filter: "6", id: "6"},
					   {title: "Hu et al [4]", filter: "7", id: "7"}, {title: "Liu et al [2]", filter: "8", id: "8"}, {title: "Gong and Cosker [5]", filter: "9", id: "9"}, 
					   {title: "Cun et al [6]", filter: "10", id: "10"}],
		demos: [
			{
			class: '1',
			image: 'images/our_images/shadow_image/99-3.png',
			header: '',
			url: 'images/our_images/shadow_image/99-3.png',
		},
		{
			class: '2',
			image: 'images/our_images/shadow_free_image/99-3.png',
			header: '',
			url: '',
		},
		{
			class: '3',
			image: 'images/our_images/ours/99-3.png',
			header: '',
			url: '',
		},
		{
			class: '4',
			image: 'images/our_images/shadow_removal_via_shshadow_image_decomposition_le_samaras/99-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/1908.08628.pdf',
		},
		{
			class: '5',
			image: 'images/our_images/shadow_generation_g2r_fs_liu/99-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '6',
			image: 'images/our_images/from_shadow_segmentation_le_samaras/99-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/2008.00267.pdf',
		},
		{
			class: '7',
			image: 'images/our_images/dsc+_hu/99-3.png',
			header: '',
			url: 'https://openaccess.thecvf.com/content_cvpr_2018/papers/Hu_Direction-Aware_Spatial_Context_CVPR_2018_paper.pdf',
		},
		{
			class: '8',
			image: 'images/our_images/shadow_generation_g2r_liu/99-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/2103.12997.pdf',
		},
		{
			class: '9',
			image: 'images/our_images/gong_cosker/99-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/1608.00762.pdf',
		},
		{
			class: '10',
			image: 'images/our_images/towards_ghost_free/99-3.png',
			header: '',
			url: 'https://arxiv.org/pdf/1911.08718.pdf',
		}]
    },
	


	
	
];







var industrylist = [
     {
        class: '3d',
        image: 'images/our_images/BDRAR/shadow_image.png',
        header: 'Shadow Image',
        url: '#',
    },


    {
        class: 'vr',
        image: 'images/our_images/BDRAR/before_fine_tune.png',
        header: 'Before Fine-tuning',
        url: '',
    },
   
    
    {
        class: 'popular ',
        image: 'images/our_images/BDRAR/after_fine_tune.png',
        header: 'After Fine-tuning',
        url: '',
    },
];
/*
var customlist = [
    {
        image: 'images/screens/customwork/404-moon.jpg',
        header: '<span>NEW</span> Moon - 404 Error Page',
        url: '../Custom Work/404/Moon/index.html',
    },
    {
        image: 'images/screens/customwork/404-picklerick.jpg',
        header: '<span>NEW</span> Pickle Rick Sliced - 404',
        url: '../Custom Work/404/Pickle Rick Sliced/index.html',
    },
    {
        image: 'images/screens/customwork/soon-citymap.jpg',
        header: '<span>NEW</span> City Map - Coming Soon',
        url: '../Custom Work/Coming Soon/City Map/index.html',
    }
];

var soonlist = [
    {
        image: 'images/soon.jpg',
        header: 'On the next week.',
        url: '#',
    },
    {
        image: 'images/soon.jpg',
        header: 'On the next week.',
        url: '#',
    },
    {
        image: 'images/soon.jpg',
        header: 'On the next week.',
        url: '#',
    }
];

var isOpenRegForm = false;
var timeoutId = setTimeout(function () {
    showRegistration();
    jQuery('.reg_optionbtn').html("<i class='fa fa-times' aria-hidden='true'></i>").addClass("optionbtn_open");
    jQuery('.reg_container').addClass("reg_container_open");
    jQuery('#registered_email').focus();
    isOpenRegForm = true;
}, 40000);

jQuery('.reg_optionbtn').click(function () {
    if (isOpenRegForm == true) {
        hideRegistration();
        isOpenRegForm = false;
        jQuery('.reg_optionbtn').html("<i class='fa fa-star' aria-hidden='true'></i>").removeClass("optionbtn_open");
        jQuery('.reg_container').removeClass("reg_container_open");
    } else {
        showRegistration();
        jQuery('.reg_optionbtn').html("<i class='fa fa-times' aria-hidden='true'></i>").addClass("optionbtn_open");
        jQuery('.reg_container').addClass("reg_container_open");
        jQuery('#registered_email').focus();
        isOpenRegForm = true;
    }
});
jQuery('#reg_submit').click(function (e) {
    if (!regFormValidation()) {
        e.preventDefault();
    }
});
function regFormValidation() {
    var valid_reg = jQuery('#registered_email').val().length;
    if (valid_reg == 0) {
        jQuery('#registered_email').css('border-color', 'red');
        return false;
    }
    return true;
}
function hideRegistration() {
    jQuery('.reg_container').animate({
        right: '-300px'
    }, 500);
};
function showRegistration() {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    jQuery('.reg_container').animate({
        right: '0px'
    }, 500);
};*/