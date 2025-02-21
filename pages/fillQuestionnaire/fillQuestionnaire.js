Page({
  data: {
    isQualified: '', // 产品是否合格
    description: '', // 不合格问题描述
    images: [], // 上传的图片列表
  },

  // 处理产品合格判断
  onRadioChange(e) {
    this.setData({
      isQualified: e.detail.value,
    });
  },

  // 处理不合格问题描述输入
  onInputDescription(e) {
    this.setData({
      description: e.detail.value,
    });
  },

  // 选择图片
  chooseImage() {
    wx.chooseImage({
      count: 3, // 最多选择 3 张图片
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          images: res.tempFilePaths,
        });
      },
    });
  },

  // 提交问卷
  submitQuestionnaire() {
    const { isQualified, description, images } = this.data;

    if (!isQualified) {
      wx.showToast({
        title: '请选择产品是否合格',
        icon: 'none',
      });
      return;
    }

    if (isQualified === '不合格' && !description) {
      wx.showToast({
        title: '请填写不合格问题描述',
        icon: 'none',
      });
      return;
    }

    // 模拟提交到后台
    wx.showLoading({
      title: '提交中...',
    });

    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '提交成功',
        icon: 'success',
      });

      // 清空表单
      this.setData({
        isQualified: '',
        description: '',
        images: [],
      });

      // 跳转到问卷详情页面（假设问卷 ID 为 1）
      wx.navigateTo({
        url: `/pages/questionnaireDetail/questionnaireDetail?id=1`,
      });
    }, 1000);
  },
});