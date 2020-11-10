# MVP模式


## 前言
> 以前有学过，感觉理解不了，然后又用不到，然后就不了了之了 QAQ，现在因为实习公司的项目有用到，如果不学的话感觉根本看不懂项目（其实学完之后还是看不懂哈哈哈），所以就重新学过，顺面记录一下

## 预备知识
通过这一次的学习，以前没有学懂，或者没有理解的东西都显露出来了，说到低还是自己太菜了QAQ，不废话，我认为想要理解好MVP模式就先得了解以下的知识

- 面向接口的编程思想
- 向上转型的概念
- 解耦的含义，思想（这里的理解不太深）

ok 如果你不懂的话请往下看、

### 面向接口编程

先复习一下接口的概念：
```
在Java程序设计语言中，接口不是类，而是对希望符合这个接口的类的一组需求（出自《Java核心卷一》p222页）
```
说白了，接口就是一组**需求**

而面向接口编程呢，就是在开始开发前，先定义好接口（可以理解为先列出一组需求），然后再进行开发

### 向上转型

即**父类引用指向子类对象**，看完下面的代码应该更好理解些

```java
/**
 * 定义一个接口
 */
public interface IStudent {
    String getName();
}
```
```java
/**
 * 继承实现这个接口
 */
public class Student implements IStudent{//此时IStudent是父类，Student是子类
    @Override
    public String getName() {
        return "任我行";
    }
}
```
```java
/**
 * 测试一下
 */
public class Test {
    public static void main(String[] args) {
        IStudent iStudent;
        iStudent=new Student();//父类引用指向子类的对象，这里做了向上转型
        System.out.println("学生的名字是："+iStudent.getName());//打印结果：学生的名字是：任我行
    }
}
```

### 解耦
> 以前总听老师说要写出高内聚，低耦合的代码，到现在还是没有理解啊啊啊啊

首先要理解耦合度的概念， 耦合度就是对象之间的**依赖性**，解耦就是降低对象之间或者说是方法之间的依赖性，让其可以独立存在

> 好吧 我这里理解也不是特别深（；´д｀）ゞ

## MVP模式
Actually，我觉得MVP模式的灵魂就是presenter层同时持有view层和model层的**引用**（请联系上边的向上转型的概念）。

---

照此逻辑，我们简单实现一个常见的登录模块。根据**面向接口编程**，我们首先列出我们的接口（需求）：
```java
/**
 * View层的需求
 */
public interface IView {
    //1. 获取用户的输入信息
    public User getViewUser();
    //2. 登录成功的操作
    public void loginSuceess();
    //3. 登录失败后的操作
    public void loginFail();
}
```

```java
/**
 * Model层的需求
 */
public interface IModel {
     //判断信息是否正确
     public boolean isOk(User user);
}
```

```java
/**
 * presenter层的需求
 */
public interface IPresenter {
    //登录操作
    public void login();
}
```

好了，接口写完，现在去实现接口：

```java

public class View extends AppCompatActivity implements IView{
    private EditText mUsername;
    private EditText mPassword;
    private Button mButton;

    private IPresenter iPresenter;//present的引用

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mUsername = findViewById(R.id.et_username);
        mPassword = findViewById(R.id.et_password);
        mButton = findViewById(R.id.btn_login);

        iPresenter = new Presenter(this);//父类引用指向子类对象，向上转型，这个this指向的是View本身，也就是是传入了一个IView的子类对象
        //此时Presenter同时持有Model层和View层的对象
        mButton.setOnClickListener(new android.view.View.OnClickListener() {
            @Override
            public void onClick(android.view.View v) {
                iPresenter.login();//此操作会执行Pressenter对象的login方法
            }
        });
    }

    //实现IView的需求
    @Override
    public User getViewUser() {
        return new User(mUsername.getText().toString(),mPassword.getText().toString());
    }

    @Override
    public void loginSuceess() {
        Toast.makeText(this, "登录成功！", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void loginFail() {
        Toast.makeText(this, "登录失败！", Toast.LENGTH_SHORT).show();
    }
}
```

```java
public class Model implements IModel{
    //IModel的需求
    @Override
    public boolean isOk(User user) {
        if (user.getUsername().equals("root")&&user.getPassword().equals("123")){
            return true;
        }
        return false;
    }
}
```
我觉得mvp模式的核心在此

```java
//presenter层，联系model和view的枢纽
public class Presenter implements IPresenter {
    private IModel iModel;
    private IView iView;

    public Presenter(IView iView) {
        this.iModel = new Model();//向上转型
        this.iView = iView;//向上转型
    }

    //IPresenter的需求
    @Override
    public void login() {//当View层点击button的时候，将会调用到这个方法
        if (iModel.isOk(iView.getViewUser())){
            iView.loginSuceess();//执行view层的loginSuceess
        }else {
            iView.loginFail();//执行view层的loginFail
        }
    }
}
```



model，view，presenter的接口，就像是三条引子，把它们联系在了一起

## 参考资料
> 肥肠感谢这些参考资料的作者(≧∀≦)ゞ

- [一步步带你精通MVP](https://mp.weixin.qq.com/s/DuNbl3V4gZY-ZCETbhZGug)
- [Android MVP架构从入门到精通-真枪实弹](https://juejin.im/post/6844903720036073480)
- [浅谈 MVP in Android](https://blog.csdn.net/lmj623565791/article/details/46596109?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160170643419724836748193%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=160170643419724836748193&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-3-46596109.first_rank_ecpm_v3_pc_rank_v2&utm_term=android+mvp&spm=1018.2118.3001.4187)
- [java提高篇（三）-----理解java的三大特性之多态](https://blog.csdn.net/chenssy/article/details/12786385?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160169439719724835832063%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=160169439719724835832063&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v3~pc_rank_v2-1-12786385.first_rank_ecpm_v3_pc_rank_v2&utm_term=%E5%A4%9A%E6%80%81&spm=1018.2118.3001.4187)
- [面向接口编程思想(的好处)](https://blog.csdn.net/Cyy19970527/article/details/83177996?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160171051919725255500190%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=160171051919725255500190&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v3~pc_rank_v2-2-83177996.first_rank_ecpm_v3_pc_rank_v2&utm_term=%E9%9D%A2%E5%90%91%E6%8E%A5%E5%8F%A3%E7%BC%96%E7%A8%8B&spm=1018.2118.3001.4187)
- [Java的向上转型与向下转型](https://zhuanlan.zhihu.com/p/34026164)
