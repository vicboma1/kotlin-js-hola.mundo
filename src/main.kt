/**
 * Created by vicboma on 23/11/15.
 */
import kotlin.browser.document

fun main(args:Array <String>) {
    val h1 = document.createElement("h1")
    h1.textContent = "Hello Vicboma!!!!!"
    document.body!!.appendChild(h1)
    println("Hello World!")
}